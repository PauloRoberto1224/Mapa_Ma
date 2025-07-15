// Função para adicionar mensagens de debug na interface
function addDebugMessage(msg) {
  try {
    // Log no console
    console.log('DEBUG:', msg);
    
    // Verifica se o elemento de debug existe e se a mensagem é válida
    const debugEl = document.getElementById('debug-messages');
    if (!debugEl || !msg) return;
    
    // Cria um novo elemento de mensagem
    const msgEl = document.createElement('div');
    
    // Formata a mensagem com timestamp
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    const msgStr = typeof msg === 'string' ? msg : JSON.stringify(msg);
    
    // Define o conteúdo da mensagem
    msgEl.textContent = timeStr + ': ' + msgStr;
    
    // Adiciona a mensagem ao container de debug
    debugEl.appendChild(msgEl);
    
    // Rola para a última mensagem
    debugEl.scrollTop = debugEl.scrollHeight;
  } catch (err) {
    console.error('Erro em addDebugMessage:', err);
  }
}

// Inicialização do mapa
addDebugMessage('Iniciando aplicação...');
var map = L.map('map').setView([-5, -45], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: ' OpenStreetMap'
}).addTo(map);

var markersLayer = L.layerGroup().addTo(map);

// Controle de informações
var info = L.control({position:'topright'});
info.onAdd = function(map){ this._div = L.DomUtil.get('info'); return this._div; };
info.update = function(props){
  this._div.innerHTML = '<h2>Dados do município</h2>'+(
    props?`<b>${props.NM_MUN}</b><br>
          CRAS: ${municipiosData[props.NM_MUN]?.CRAS||0}<br>
          CREAS: ${municipiosData[props.NM_MUN]?.CREAS||0}<br>
          SSAA: ${municipiosData[props.NM_MUN]?.SSAA||0}<br>
          Total: ${municipiosData[props.NM_MUN]?.total||0}`
    :'Passe o mouse sobre um município'
  );
};
info.addTo(map);

// Processamento dos dados dos municípios
var municipiosData = {};
function countByMunicipio(){
  data.forEach(d=>{
    var m = d.Municipio;
    if(!municipiosData[m]) municipiosData[m]={CRAS:0,CREAS:0,SSAA:0,total:0};
    municipiosData[m][d.Tipo]++;
    municipiosData[m].total++;
  });
}
countByMunicipio();

// Funções de interação com o mapa
function highlight(e){
  var l=e.target;
  l.setStyle({weight:2,fillOpacity:0.8});
  info.update(l.feature.properties);
}

function resetHighlight(e){
  geojsonMunicipios.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e){
  map.fitBounds(e.target.getBounds());
  showPoints(e.target.feature.properties.NM_MUN);
}

function onEachFeature(feature,layer){
  layer.on({mouseover:highlight, mouseout:resetHighlight, click:zoomToFeature});
}

function showPoints(m){
  markersLayer.clearLayers();
  data.filter(d=>d.Municipio===m).forEach(d=>{
    L.marker([+d.Latitude, +d.Longitude])
      .bindPopup(`<b>${d.Nome}</b><br>${d.Tipo}`)
      .addTo(markersLayer);
  });
}

// Variáveis globais
var geojsonMunicipios;
var mesoColors;
var mesorregioesData = {};
var contagemPorMesorregiao = {};
var municipioToMesorregiao = {};
var mesorregioes = [];

// Função para processar os dados das mesorregiões
function processarDadosMesorregioes() {
  console.log('Iniciando processamento dos dados das mesorregiões...');
  try {
    // Limpa estruturas de dados existentes
    mesorregioes.length = 0;
    Object.keys(mesorregioesData).forEach(key => delete mesorregioesData[key]);
    Object.keys(contagemPorMesorregiao).forEach(key => delete contagemPorMesorregiao[key]);
    Object.keys(municipioToMesorregiao).forEach(key => delete municipioToMesorregiao[key]);
    
    // Inicializa as estruturas de dados
    Object.keys(dadosMesorregioes).forEach(mesorregiao => {
      mesorregioesData[mesorregiao] = [];
      contagemPorMesorregiao[mesorregiao] = 0;
      if (!mesorregioes.includes(mesorregiao)) {
        mesorregioes.push(mesorregiao);
      }
    });
    
    // Processa os dados das mesorregiões
    Object.entries(dadosMesorregioes).forEach(([mesorregiao, microrregioes]) => {
      if (typeof microrregioes === 'object' && microrregioes !== null) {
        Object.values(microrregioes).forEach(municipios => {
          if (Array.isArray(municipios)) {
            // Adiciona à lista de municípios da mesorregião
            if (!Array.isArray(mesorregioesData[mesorregiao])) {
              mesorregioesData[mesorregiao] = [];
            }
            
            // Adiciona cada município individualmente
            municipios.forEach(municipio => {
              if (typeof municipio === 'string') {
                const municipioTrim = municipio.trim();
                if (!mesorregioesData[mesorregiao].includes(municipioTrim)) {
                  mesorregioesData[mesorregiao].push(municipioTrim);
                  municipioToMesorregiao[municipioTrim] = mesorregiao;
                  contagemPorMesorregiao[mesorregiao] = (contagemPorMesorregiao[mesorregiao] || 0) + 1;
                }
              }
            });
          }
        });
      }
    });
    
    console.log('Dados processados com sucesso');
    return true;
  } catch (error) {
    console.error('Erro ao processar os dados:', error);
    addDebugMessage('Erro ao processar os dados: ' + error.message);
    return false;
  }
}

// Função removida: exibirContagem() - A informação agora é mostrada na legenda

// Função para obter a cor da mesorregião
function getColorForMesorregiao(mesorregiao) {
  // Cores fixas para cada mesorregião
  const colors = {
    'Norte Maranhense': '#1f78b4',
    'Oeste Maranhense': '#33a02c',
    'Centro Maranhense': '#ff7f00',
    'Leste Maranhense': '#6a3d9a',
    'Sul Maranhense': '#e31a1c'  // Vermelho para o Sul Maranhense
  };
  return colors[mesorregiao] || '#999999';
}

// Função para criar a legenda
function createLegend() {
  console.log('=== Iniciando createLegend() ===');
  addDebugMessage('Criando legenda...');
  
  try {
    const cont = document.getElementById('legend-content');
    if (!cont) {
      console.error('Elemento #legend-content não encontrado');
      return;
    }
    
    // Mostra indicador de carregamento
    cont.innerHTML = `
      <div class="loading-indicator">
        <div class="spinner"></div>
        <p>Carregando mesorregiões...</p>
      </div>
    `;
    
    // Pequeno atraso para permitir que a UI seja atualizada
    setTimeout(() => {
      try {
        let html = '<div class="mesorregioes-lista">';
        
        // Ordena as mesorregiões alfabeticamente
        const mesorregioesOrdenadas = Object.keys(dadosMesorregioes).sort();
        
        mesorregioesOrdenadas.forEach(mesorregiao => {
          try {
            const totalMunicipios = Object.values(dadosMesorregioes[mesorregiao] || {})
              .reduce((total, municipios) => total + municipios.length, 0);
            
            // Escapa caracteres especiais para evitar problemas com aspas
            const safeMesorregiao = mesorregiao
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
            
            html += `
              <div class="mesorregiao-item" 
                   style="border-left: 4px solid ${getColorForMesorregiao(mesorregiao)}"
                   onclick="exibirMunicipios('${safeMesorregiao}')"
                   role="button"
                   tabindex="0"
                   onkeydown="if(event.key === 'Enter') exibirMunicipios('${safeMesorregiao}')">
                <span class="mesorregiao-nome">${safeMesorregiao}</span>
                <span class="mesorregiao-contagem">${totalMunicipios} municípios</span>
              </div>
            `;
          } catch (error) {
            console.error(`Erro ao processar a mesorregião ${mesorregiao}:`, error);
            addDebugMessage(`Erro ao processar a mesorregião ${mesorregiao}: ${error.message}`);
          }
        });
        
        html += '</div>';
        cont.innerHTML = html;
        
        console.log('=== Finalizando createLegend() ===');
        addDebugMessage('Legenda criada com sucesso!');
        
      } catch (error) {
        console.error('Erro ao criar a legenda:', error);
        cont.innerHTML = `
          <div class="error-message">
            <p>Não foi possível carregar as mesorregiões.</p>
            <button onclick="createLegend()" class="retry-btn">Tentar novamente</button>
            <p class="error-details">${error.message}</p>
          </div>
        `;
        addDebugMessage('Erro ao criar legenda: ' + error.message);
      }
    }, 100);
    
  } catch (error) {
    console.error('Erro em createLegend():', error);
    const cont = document.getElementById('legend-content');
    if (cont) {
      cont.innerHTML = `
        <div class="error-message">
          <p>Ocorreu um erro inesperado ao carregar a legenda.</p>
          <button onclick="createLegend()" class="retry-btn">Tentar novamente</button>
        </div>
      `;
    }
    addDebugMessage('Erro ao criar legenda: ' + error.message);
  }
}

// Função para exibir os municípios de uma mesorregião
function exibirMunicipios(mesorregiao) {
  console.log('Exibindo municípios para:', mesorregiao);
  const cont = document.getElementById('legend-content');
  if (!cont) return;
  
  const municipios = getMunicipiosPorMesorregiao(mesorregiao);
  const cor = getColorForMesorregiao(mesorregiao);
  
  let html = `
    <div class="mesorregiao-info">
      <h3>${mesorregiao}</h3>
      <button onclick="createLegend()" class="back-btn">← Voltar</button>
      <h4>Municípios (${municipios.length}):</h4>
      <div class="municipios-lista">
  `;
  
  // Agrupa por microrregião
  const microrregioes = {};
  
  // Encontra a microrregião de cada município
  Object.entries(dadosMesorregioes[mesorregiao] || {}).forEach(([microrregiao, listaMunicipios]) => {
    if (Array.isArray(listaMunicipios)) {
      microrregioes[microrregiao] = [...listaMunicipios].sort();
    }
  });
  
  // Ordena as microrregiões alfabeticamente
  const microrregioesOrdenadas = Object.keys(microrregioes).sort();
  
  // Adiciona os municípios agrupados por microrregião
  microrregioesOrdenadas.forEach(microrregiao => {
    const municipiosMicrorregiao = microrregioes[microrregiao];
    
    html += `
      <div class="microrregiao-container">
        <div class="microrregiao-titulo" style="border-left: 4px solid ${cor}">
          ${microrregiao} (${municipiosMicrorregiao.length})
        </div>
        <div class="municipios-microrregiao">
    `;
    
    municipiosMicrorregiao.forEach(municipio => {
      html += `
        <div class="municipio">
          ${municipio}
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
  
  cont.innerHTML = html;
}

// Função para obter a lista de mesorregiões
function getMesorregioes() {
  return Object.keys(dadosMesorregioes).sort();
}

// Função para obter os municípios de uma mesorregião, agrupados por microrregião
function getMunicipiosPorMesorregiao(mesorregiao) {
  const microrregioes = dadosMesorregioes[mesorregiao] || {};
  const todosMunicipios = [];
  
  // Junta todos os municípios de todas as microrregiões
  Object.values(microrregioes).forEach(municipios => {
    if (Array.isArray(municipios)) {
      todosMunicipios.push(...municipios);
    }
  });
  
  return todosMunicipios.sort();
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM totalmente carregado ===');
  addDebugMessage('DOM totalmente carregado');
  
  try {
    console.log('Iniciando processamento dos dados...');
    addDebugMessage('Iniciando processamento dos dados...');
    
    if (processarDadosMesorregioes()) {
      console.log('Dados processados com sucesso');
      addDebugMessage('Dados processados com sucesso');
      
      // Tenta criar a legenda após um pequeno atraso
      setTimeout(() => {
        console.log('Tentando criar a legenda...');
        addDebugMessage('Criando legenda...');
        try {
          createLegend();
          console.log('Legenda criada com sucesso!');
          addDebugMessage('Legenda criada com sucesso!');
        } catch (e) {
          console.error('Erro ao criar legenda:', e);
          addDebugMessage('Erro ao criar legenda: ' + e.message);
        }
      }, 500);
    }
  } catch (error) {
    console.error('Erro ao processar dados iniciais:', error);
    addDebugMessage('Erro ao processar dados iniciais: ' + error.message);
  }
});

// Carrega os dados e monta a legenda
console.log('Iniciando carregamento do meso_colors.json...');
fetch('meso_colors.json')
  .then(r => {
    console.log('Resposta do fetch:', r.status);
    if (!r.ok) {
      throw new Error(`Erro ${r.status} ao carregar meso_colors.json`);
    }
    return r.json();
  })
  .then(meso => {
    console.log('meso_colors carregado com sucesso');
    mesoColors = meso.features;
    console.log('Quantidade de features carregadas:', mesoColors ? mesoColors.length : 0);
    createLegend();
  })
  .catch(error => {
    console.error('Erro ao carregar meso_colors.json:', error);
    // Mesmo com erro, tenta criar a legenda com os dados que já temos
    createLegend();
  });

// Aplicar estilos no mapa de municípios
function styleMeso(feature){
  const nomeMunicipio = feature.properties.name || 'Desconhecido';
  // Se não encontrar a mesorregião, assume que é do Sul Maranhense
  const mesorregiao = municipioToMesorregiao[nomeMunicipio] || 'Sul Maranhense';
  const color = getColorForMesorregiao(mesorregiao);
  
  console.log('Estilizando:', nomeMunicipio, 'Mesorregião:', mesorregiao, 'Cor:', color);
  
  // Armazena a mesorregião nas propriedades do feature para uso posterior
  feature.properties.mesorregiao = mesorregiao;
  
  return {
    fillColor: color,
    weight: 1,
    opacity: 1,
    color: '#555',
    fillOpacity: 0.8,
    dashArray: ''
  };
}

// Primeiro carrega o GeoJSON dos municípios
fetch('municipios_ma.json')
  .then(response => response.json())
  .then(geojson => {
    console.log('GeoJSON carregado com', geojson.features.length, 'elementos');
    // Adiciona os municípios ao mapa
    geojsonMunicipios = L.geoJSON(geojson, {
      style: styleMeso,
      onEachFeature: onEachFeature
    }).addTo(map);
    
    // Ajusta a visualização para mostrar todos os municípios
    map.fitBounds(geojsonMunicipios.getBounds());
  })
  .catch(error => console.error('Erro ao carregar o GeoJSON:', error));
