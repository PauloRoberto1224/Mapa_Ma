// Função para obter os municípios de uma mesorregião específica
function getMunicipiosPorMesorregiao(mesorregiao) {
  return window.dadosMesorregioes[mesorregiao] || {};
}

// Função para obter todas as mesorregiões
function getMesorregioes() {
  return Object.keys(window.dadosMesorregioes);
}

// Função para verificar se um município pertence a uma mesorregião
function isMunicipioNaMesorregiao(municipio, mesorregiao) {
  if (!window.dadosMesorregioes[mesorregiao]) return false;
  
  for (const microrregiao in window.dadosMesorregioes[mesorregiao]) {
    if (window.dadosMesorregioes[mesorregiao][microrregiao].includes(municipio)) {
      return true;
    }
  }
  return false;
}

// Função para encontrar a mesorregião de um município
function encontrarMesorregiaoDoMunicipio(municipio) {
  for (const mesorregiao in window.dadosMesorregioes) {
    if (isMunicipioNaMesorregiao(municipio, mesorregiao)) {
      return mesorregiao;
    }
  }
  return null;
}
