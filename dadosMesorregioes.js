// Dados das mesorregiões e microrregiões do Maranhão
const dadosMesorregioes = {
  'Norte Maranhense': {
    'Microrregião Litoral Ocidental': ['Alcântara', 'Apicum‑Açu', 'Bacuri', 'Bacurituba', 'Bequimão', 'Cajapió', 'Cedral', 'Central do Maranhão', 'Cururupu', 'Guimarães', 'Mirinzal', 'Porto Rico do Maranhão', 'Serrano do Maranhão'],
    'Microrregião Aglomeração Urbana de São Luís': ['Paço do Lumiar', 'Raposa', 'São José de Ribamar', 'São Luís'],
    'Microrregião Rosário': ['Axixá', 'Bacabeira', 'Cachoeira Grande', 'Icatu', 'Morros', 'Presidente Juscelino', 'Rosário', 'Santa Rita'],
    'Microrregião Lençóis Maranhenses': ['Barreirinhas', 'Humberto de Campos', 'Paulino Neves', 'Primeira Cruz', 'Santo Amaro do Maranhão', 'Tutóia'],
    'Microrregião Baixada Maranhense': ['Anajatuba', 'Arari', 'Bela Vista do Maranhão', 'Cajari', 'Conceição do Lago-Açu', 'Igarapé do Meio', 'Matinha', 'Monção', 'Olinda Nova do Maranhão', 'Palmeirândia', 'Pedro do Rosário', 'Penalva', 'Peri Mirim', 'Pinheiro', 'Presidente Sarney', 'Santa Helena', 'São Bento', 'São João Batista', 'São Vicente Ferrer', 'Viana', 'Vitória do Mearim'],
    'Microrregião Itapecuru Mirim': ['Cantanhede', 'Itapecuru-Mirim', 'Matões do Norte', 'Miranda do Norte', 'Nina Rodrigues', 'Pirapemas', 'Presidente Vargas', 'Vargem Grande']
  },
  'Oeste Maranhense': {
    'Microrregião Gurupi': ['Amapá do Maranhão', 'Boa Vista do Gurupi', 'Cândido Mendes', 'Carutapera', 'Centro do Guilherme', 'Centro Novo do Maranhão', 'Godofredo Viana', 'Governador Nunes Freire', 'Junco do Maranhão', 'Luís Domingues', 'Maracaçumé', 'Maranhãozinho', 'Turiaçu', 'Turilândia', 'Riachão'],
    'Microrregião Pindaré': ['Altamira do Maranhão', 'Alto Alegre do Pindaré', 'Araguanã', 'Bom Jardim', 'Bom Jesus das Selvas', 'Brejo de Areia', 'Buriticupu', 'Governador Newton Bello', 'Lago da Pedra', 'Lagoa Grande do Maranhão', 'Marajá do Sena', 'Nova Olinda do Maranhão', 'Paulo Ramos', 'Pindaré‑Mirim', 'Presidente Médici', 'Santa Inês', 'Santa Luzia', 'Santa Luzia do Paruá', 'São João do Caru', 'Tufilândia', 'Vitorino Freire', 'Zé Doca'],
    'Microrregião Imperatriz': ['Açailândia', 'Amarante do Maranhão', 'Buritirana', 'Cidelândia', 'Davinópolis', 'Governador Edison Lobão', 'Imperatriz', 'Itinga do Maranhão', 'João Lisboa', 'Lajeado Novo', 'Montes Altos', 'Ribamar Fiquene', 'São Francisco do Brejão', 'São Pedro da Água Branca', 'Senador La Rocque', 'Vila Nova dos Martírios']
  },
  'Centro Maranhense': {
    'Microrregião Médio Mearim': ['Bacabal', 'Bernardo do Mearim', 'Bom Lugar', 'Esperantinópolis', 'Igarapé Grande', 'Lago do Junco', 'Lago dos Rodrigues', 'Lago Verde', 'Lima Campos', 'Olho d\'Água das Cunhãs', 'Pedreiras', 'Pio XII', 'Poção de Pedras', 'Santo Antônio dos Lopes', 'São Luís Gonzaga do Maranhão', 'São Mateus do Maranhão', 'São Raimundo do Doca Bezerra', 'São Roberto', 'Satubinha', 'Trizidela do Vale'],
    'Microrregião Alto Mearim e Grajaú': ['Arame', 'Barra do Corda', 'Fernando Falcão', 'Formosa da Serra Negra', 'Grajaú', 'Itaipava do Grajaú', 'Jenipapo dos Vieiras', 'Joselândia', 'Santa Filomena do Maranhão', 'Sítio Novo', 'Tuntum'],
    'Microrregião Presidente Dutra': ['Fortuna', 'Dom Pedro', 'Gonçalves Dias', 'Governador Archer', 'Governador Eugênio Barros', 'Governador Luiz Rocha', 'Graça Aranha', 'Presidente Dutra', 'São Domingos do Maranhão', 'São José dos Basílios', 'Senador Alexandre Costa']
  },
  'Leste Maranhense': {
    'Microrregião Baixo Parnaíba Maranhense': ['Água Doce do Maranhão', 'Araioses', 'Magalhães de Almeida', 'Santa Quitéria do Maranhão', 'Santana do Maranhão', 'São Bernardo'],
    'Microrregião Chapadinha': ['Anapurus', 'Belágua', 'Brejo', 'Buriti', 'Chapadinha', 'Mata Roma', 'Milagres do Maranhão', 'São Benedito do Rio Preto', 'Urbano Santos'],
    'Microrregião Codó': ['Alto Alegre do Maranhão', 'Capinzal do Norte', 'Codó', 'Coroatá', 'Peritoró', 'Timbiras'],
    'Microrregião Coelho Neto': ['Afonso Cunha', 'Aldeias Altas', 'Coelho Neto', 'Duque Bacelar'],
    'Microrregião Caxias': ['Buriti Bravo', 'Caxias', 'Matões', 'Parnarama', 'São João do Soter', 'Timon'],
    'Microrregião Chapadas do Alto Itapecuru': ['Barão de Grajaú', 'Colinas', 'Jatobá', 'Lagoa do Mato', 'Mirador', 'Nova Iorque', 'Paraibano', 'Passagem Franca', 'Pastos Bons', 'São Francisco do Maranhão', 'São João dos Patos', 'Sucupira do Norte', 'Sucupira do Riachão']
  },
  'Sul Maranhense': {
    'Microrregião Gerais de Balsas': ['Alto Parnaíba', 'Balsas', 'Feira Nova do Maranhão', 'Riachão', 'São Félix de Balsas', 'São Raimundo das Mangabeiras', 'Tasso Fragoso'],
    'Microrregião Chapadas das Mangabeiras': ['Benedito Leite', 'Fortaleza dos Nogueiras', 'Loreto', 'Nova Colinas', 'Sambaíba', 'São Domingos do Azeitão', 'São Félix de Balsas', 'São Raimundo das Mangabeiras'],
    'Microrregião Porto Franco': ['Campestre do Maranhão', 'Carolina', 'Estreito', 'Porto Franco', 'São João do Paraíso', 'São Pedro dos Crentes']
  }
};

// Torna os dados disponíveis globalmente
window.dadosMesorregioes = dadosMesorregioes;
