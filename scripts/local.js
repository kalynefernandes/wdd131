// Atualizar o ano e a última modificação no rodapé
document.getElementById("anoatual").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = "Última modificação: " + document.lastModified;

// 1. Variáveis estáticas de temperatura e vento
const temperaturaCelsius = 8; // Ajusta para testar (ex: 8°C atende à regra <= 10)
const velocidadeVentoKmH = 15; // Ajusta para testar (ex: 15 km/h atende à regra > 4.8)

// Elemento no HTML onde a sensação térmica será exibida
const spanSensacao = document.getElementById("sensacao");

// 2. Função de uma linha para calcular a sensação térmica
const calcularSensacaoTermica = (temp, vento) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);

// 3. Verificação das condições antes de chamar a função
if (temperaturaCelsius <= 10 && velocidadeVentoKmH > 4.8) {
    spanSensacao.textContent = calcularSensacaoTermica(temperaturaCelsius, velocidadeVentoKmH) + " °C";
} else {
    spanSensacao.textContent = "N/A";
}