const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // 3 novos templos adicionados
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 253015,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
 {
    nomeDoTemplo: "Bern Switzerland",
    localizacao: "Münchenbuchsee, Bern, Suíça",
    consagracao: "1955, 11 de setembro",
    area: 35546,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/1280x800/bern-switzerland-temple-lds-653038-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Frankfurt Germany",
    localizacao: "Friedrichsdorf, Alemanha",
    consagracao: "1987, 28 de agosto",
    area: 32506,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-lds-82734-wallpaper.jpg"
  }
];

const containerCards = document.getElementById("cards-templos");
const tituloFiltro = document.getElementById("titulo-filtro");
const linksFiltro = document.querySelectorAll("#menu-nav a[data-filtro]");
const btnHamburguer = document.getElementById("menu-hamburguer");
const menuNav = document.getElementById("menu-nav");

function obterAnoConsagracao(dataTexto) {
  const match = dataTexto.match(/\b(\d{4})\b/);
  return match ? Number(match[1]) : 0;
}

function exibirTemplos(listaTemplos) {
  if (!containerCards) return;
  containerCards.innerHTML = "";

  listaTemplos.forEach((templo) => {
    const card = document.createElement("article");
    card.classList.add("cartao-templo");

    card.innerHTML = `
      <h2>${templo.nomeDoTemplo}</h2>
      <p><strong>Localização:</strong> ${templo.localizacao}</p>
      <p><strong>Consagração:</strong> ${templo.consagracao}</p>
      <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados</p>
      <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
    `;

    containerCards.appendChild(card);
  });
}

function aplicarFiltro(filtro) {
  let filtrados = templos;
  let titulo = "Página Inicial";

  switch (filtro) {
    case "antigos":
      filtrados = templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900);
      titulo = "Templos Antigos (Antes de 1900)";
      break;
    case "novos":
      filtrados = templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000);
      titulo = "Templos Novos (Depois de 2000)";
      break;
    case "grandes":
      filtrados = templos.filter((t) => t.area > 90000);
      titulo = "Templos Grandes (Acima de 90.000 pés²)";
      break;
    case "pequenos":
      filtrados = templos.filter((t) => t.area < 10000);
      titulo = "Templos Pequenos (Abaixo de 10.000 pés²)";
      break;
    default:
      filtrados = templos;
      titulo = "Página Inicial";
      break;
  }

  if (tituloFiltro) {
    tituloFiltro.textContent = titulo;
  }
  exibirTemplos(filtrados);
}

linksFiltro.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const filtroSelecionado = link.getAttribute("data-filtro");
    aplicarFiltro(filtroSelecionado);

    if (menuNav) {
      menuNav.classList.remove("mostrar");
    }
    if (btnHamburguer) {
      btnHamburguer.innerHTML = "☰";
    }
  });
});

// Rodapé: ano atual e última modificação
const anoAtualSpan = document.getElementById("anoatual");
if (anoAtualSpan) {
  anoAtualSpan.textContent = new Date().getFullYear();
}

const ultimaModificacaoP = document.getElementById("ultimaModificacao");
if (ultimaModificacaoP) {
  ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;
}

// Controle do Menu Hambúrguer
if (btnHamburguer && menuNav) {
  btnHamburguer.addEventListener("click", () => {
    menuNav.classList.toggle("mostrar");
    btnHamburguer.innerHTML = menuNav.classList.contains("mostrar")
      ? "×"
      : "☰";
  });
}

// Renderiza todos os templos ao carregar a página
aplicarFiltro("inicio");