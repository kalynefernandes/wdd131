// 1. Pega o ano atual e coloca no span com id "anoatual"
const anoAtualSpan = document.querySelector("#anoatual");
const anoAtual = new Date().getFullYear();
anoAtualSpan.textContent = anoAtual;

// 2. Pega a data da última modificação do documento e coloca no parágrafo com id "ultimaModificacao"
const ultimaModificacaoP = document.querySelector("#ultimaModificacao");
ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;