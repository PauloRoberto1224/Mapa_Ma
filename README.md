# Mapa Interativo do Maranhão

Este projeto é um mapa interativo do estado do Maranhão que exibe as mesorregiões e microrregiões do estado, permitindo a visualização e interação com os municípios.

## Como iniciar o projeto

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Abra o arquivo `index.html` no seu navegador web:
```bash
cd Mapa_Ma
start index.html
```

3. O mapa será carregado automaticamente com:
   - Dados dos municípios do Maranhão
   - Mesorregiões e microrregiões
   - Legenda interativa
   - Cores atribuídas por mesorregião

## Estrutura do Projeto

- `index.html`: Página principal do mapa
- `script.js`: Lógica principal do mapa e interações
- `dadosMesorregioes.js`: Dados das mesorregiões e microrregiões
- `municipios_ma.json`: Dados GeoJSON dos municípios

## Adicionando Municípios a Mesorregiões e Microrregiões

Para adicionar ou modificar municípios no arquivo `dadosMesorregioes.js`, siga este formato:

```javascript
const dadosMesorregioes = {
  'Nome da Mesorregião': {
    'Nome da Microrregião': [
      'Nome do Município 1',
      'Nome do Município 2',
      // ...
    ]
  }
}
```

### Regras para Nomes de Municípios
1. Use hífen (-) para nomes compostos (ex: Conceição do Lago-Açu)
2. Mantenha a primeira letra maiúscula de cada palavra
3. Não use acentos (o sistema os removerá automaticamente)
4. Use hífen padrão (-) em vez de hífens especiais

## Sistema de Cores por Mesorregião

As cores são atribuídas automaticamente a cada mesorregião de acordo com o seguinte padrão:

- Norte Maranhense: Azul (#1f78b4)
- Oeste Maranhense: Verde (#33a02c)
- Centro Maranhense: Laranja (#ff7f00)
- Leste Maranhense: Roxo (#6a3d9a)
- Sul Maranhense: Vermelho (#e31a1c)

### Como as Cores Funcionam
1. Cada mesorregião tem uma cor fixa definida no sistema
2. Os municípios são pintados com a cor da sua mesorregião
3. Se um município não for encontrado na lista, ele aparecerá em cinza (#808080)
4. A cor é aplicada automaticamente quando o mapa é carregado

## Funcionalidades do Mapa

1. **Interatividade**:
   - Passe o mouse sobre um município para ver informações
   - Clique em um município para destacá-lo
   - Clique na legenda para localizar municípios

2. **Legenda**:
   - Organizada por mesorregiões
   - Agrupada por microrregiões
   - Municípios listados em ordem alfabética
   - Cores correspondentes às mesorregiões

3. **Informações**:
   - Total de municípios por mesorregião
   - Número de CRAS, CREAS e SSAA em cada município
   - Contagem total de serviços por município

## Dicas de Uso

1. Use o controle de zoom para navegar pelo mapa
2. Clique em qualquer município para destacá-lo
3. Use a legenda para encontrar municípios específicos
4. As cores ajudam a identificar rapidamente as mesorregiões

## Problemas Conhecidos

- Alguns municípios podem não aparecer corretamente se seus nomes não estiverem formatados corretamente
- Verifique sempre a formatação dos nomes seguindo as regras mencionadas acima

## Contribuição

Se encontrar algum erro ou quiser adicionar novos municípios, siga estes passos:

1. Crie um fork do projeto
2. Faça suas alterações no arquivo `dadosMesorregioes.js`
3. Teste as alterações localmente
4. Faça um pull request com suas mudanças

## Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.
