var data = [
  // São Luís – CRAS/CREAS/SSAA
  { Nome:"CRAS Exemplo", Tipo:"CRAS", Latitude:"-2.53812", Longitude:"-44.28267", Municipio:"São Luís" },
  { Nome:"CREAS Central", Tipo:"CREAS", Latitude:"-2.54500", Longitude:"-44.28000", Municipio:"São Luís" },
  { Nome:"SSAA Povoado X", Tipo:"SSAA", Latitude:"-4.87231", Longitude:"-46.00892", Municipio:"Arame" },

  // São Luís – Restaurantes
  { Nome:"Cozinha Bequimão", Tipo:"restaurante", Latitude:"-2.53472", Longitude:"-44.24472", Municipio:"São Luís" },
  { Nome:"Restaurante Popular - Cidade Olímpica", Tipo:"restaurante", Latitude:"-2.58444", Longitude:"-44.18556", Municipio:"São Luís" },
  { Nome:"Restaurante Anjo da Guarda", Tipo:"restaurante", Latitude:"-2.56500", Longitude:"-44.33167", Municipio:"São Luís" }, // 2°33'54"S = -2.565, 44°19'54"W = -44.33167
  { Nome:"Restaurante Sol e Mar", Tipo:"restaurante", Latitude:"-2.48778", Longitude:"-44.21611", Municipio:"São Luís" },    // 2°29'16"S = -2.48778, 44°12'58"W = -44.21611
  { Nome:"Restaurante Coroado", Tipo:"restaurante", Latitude:"-2.55639", Longitude:"-44.26806", Municipio:"São Luís" },    // 2°33'23"S = -2.55639, 44°16'05"W = -44.26806
  { Nome:"Restaurante Liberdade", Tipo:"restaurante", Latitude:"-2.53028", Longitude:"-44.28694", Municipio:"São Luís" }, // 2°31'49"S = -2.53028, 44°17'13"W = -44.28694
  { Nome:"Restaurante São Francisco", Tipo:"restaurante", Latitude:"-2.51083", Longitude:"-44.30611", Municipio:"São Luís" }, // 2°30'39"S = -2.51083, 44°18'22"W = -44.30611
  { Nome:"Restaurante João de Deus", Tipo:"restaurante", Latitude:"-2.55778", Longitude:"-44.22972", Municipio:"São Luís" }, // 2°33'28"S = -2.55778, 44°13'47"W = -44.22972

  // Paço do Lumiar
  { Nome:"Restaurante Maiobão", Tipo:"restaurante", Latitude:"-2.55056", Longitude:"-44.17111", Municipio:"Paço do Lumiar" }, // 2°33'02"S = -2.55056, 44°10'16"W = -44.17111

  // Fora de São Luís – outros municípios
  { Nome:"Restaurante - Lago da Pedra", Tipo:"restaurante", Latitude:"-4.56200", Longitude:"-45.13250", Municipio:"Lago da Pedra" },
  { Nome:"Restaurante - Pedreiras", Tipo:"restaurante", Latitude:"-4.57361", Longitude:"-44.59694", Municipio:"Pedreiras" },
  { Nome:"Restaurante - Chapadinha", Tipo:"restaurante", Latitude:"-3.74611", Longitude:"-43.36667", Municipio:"Chapadinha" },
  { Nome:"Restaurante - Zé Doca", Tipo:"restaurante", Latitude:"-3.27361", Longitude:"-45.65639", Municipio:"Zé Doca" },
  { Nome:"Restaurante - Grajaú", Tipo:"restaurante", Latitude:"-5.82333", Longitude:"-46.15583", Municipio:"Grajaú" },
  { Nome:"Restaurante - Açailândia", Tipo:"restaurante", Latitude:"-4.94806", Longitude:"-47.46389", Municipio:"Açailândia" },
  { Nome:"Restaurante - Colinas", Tipo:"restaurante", Latitude:"-6.02694", Longitude:"-44.24389", Municipio:"Colinas" },
  { Nome:"Restaurante - Santa Luzia", Tipo:"restaurante", Latitude:"-3.96361", Longitude:"-45.66500", Municipio:"Santa Luzia do Paruá" },
  { Nome:"Restaurante - Tutóia", Tipo:"restaurante", Latitude:"-2.76472", Longitude:"-42.27611", Municipio:"Tutóia" },
  { Nome:"Restaurante Marudá", Tipo:"restaurante", Latitude:"-2.33222", Longitude:"-44.47972", Municipio:"Alcântara" },
  { Nome:"Restaurante - São João dos Patos", Tipo:"restaurante", Latitude:"-6.49500", Longitude:"-43.70028", Municipio:"São João dos Patos" },
  { Nome:"Restaurante - Itinga", Tipo:"restaurante", Latitude:"-4.45944", Longitude:"-47.52583", Municipio:"Itinga do Maranhão" },
  { Nome:"Restaurante UEMASUL - Imperatriz", Tipo:"restaurante", Latitude:"-5.53139", Longitude:"-47.48639", Municipio:"Imperatriz" },
  { Nome:"Restaurante - Vargem Grande", Tipo:"restaurante", Latitude:"-3.54083", Longitude:"-43.91639", Municipio:"Vargem Grande" },
  { Nome:"Restaurante - Bom Jardim", Tipo:"restaurante", Latitude:"-3.54472", Longitude:"-45.60861", Municipio:"Bom Jardim" },
  { Nome:"Restaurante - Godofredo Viana", Tipo:"restaurante", Latitude:"-1.41806", Longitude:"-45.77306", Municipio:"Godofredo Viana" },
  { Nome:"Restaurante - Viana", Tipo:"restaurante", Latitude:"-3.20417", Longitude:"-45.00500", Municipio:"Viana" },
  { Nome:"Restaurante - Governador Newton Bello", Tipo:"restaurante", Latitude:"-3.43167", Longitude:"-45.66972", Municipio:"Governador Newton Bello" },
  { Nome:"Restaurante - Satubinha", Tipo:"restaurante", Latitude:"-4.03222", Longitude:"-45.24139", Municipio:"Satubinha" },
  { Nome:"Restaurante - Itaipava do Grajaú", Tipo:"restaurante", Latitude:"-5.14417", Longitude:"-45.78944", Municipio:"Itaipava do Grajaú" },
  { Nome:"Restaurante - Arame", Tipo:"restaurante", Latitude:"-4.88056", Longitude:"-46.01167", Municipio:"Arame" },
  { Nome:"Restaurante - Fernando Falcão", Tipo:"restaurante", Latitude:"-6.14639", Longitude:"-44.90528", Municipio:"Fernando Falcão" },
  { Nome:"Restaurante - Jenipapo dos Vieiras", Tipo:"restaurante", Latitude:"-5.38333", Longitude:"-45.64083", Municipio:"Jenipapo dos Vieiras" },
  { Nome:"Restaurante - São Francisco", Tipo:"restaurante", Latitude:"-6.24972", Longitude:"-42.85700", Municipio:"São Francisco do Maranhão" },
  { Nome:"Restaurante - Lagoa Grande", Tipo:"restaurante", Latitude:"-4.99417", Longitude:"-45.38806", Municipio:"Lagoa Grande" },
  { Nome:"Restaurante - Aldeias Altas", Tipo:"restaurante", Latitude:"-4.62750", Longitude:"-43.47083", Municipio:"Aldeias Altas" },
  { Nome:"Restaurante - Cajari", Tipo:"restaurante", Latitude:"-3.32222", Longitude:"-45.02139", Municipio:"Cajari" },
  { Nome:"Cozinha Comunitária - Conceição do Lago-Açu", Tipo:"restaurante", Latitude:"-3.84917", Longitude:"-44.88750", Municipio:"Conceição do Lago-Açu" },
  { Nome:"Restaurante - Serrano", Tipo:"restaurante", Latitude:"-1.85250", Longitude:"-45.09861", Municipio:"Serrano do Maranhão" },
  { Nome:"Restaurante - Balsas", Tipo:"restaurante", Latitude:"-7.53111", Longitude:"-46.03750", Municipio:"Balsas" },
  { Nome:"Restaurante - São João do Caru", Tipo:"restaurante", Latitude:"-3.54583", Longitude:"-46.26639", Municipio:"São João do Caru" },
  { Nome:"Restaurante - Santa Filomena", Tipo:"restaurante", Latitude:"-5.49417", Longitude:"-44.55528", Municipio:"Santa Filomena do Maranhão" },
  { Nome:"Restaurante - Pedro do Rosário", Tipo:"restaurante", Latitude:"-2.96806", Longitude:"-45.34361", Municipio:"Pedro do Rosário" },
  { Nome:"Restaurante - Araioses", Tipo:"restaurante", Latitude:"-2.89417", Longitude:"-41.91583", Municipio:"Araioses" },
  { Nome:"Restaurante - Belágua", Tipo:"restaurante", Latitude:"-3.15611", Longitude:"-43.50556", Municipio:"Belágua" },
  { Nome:"Restaurante - Primeira Cruz", Tipo:"restaurante", Latitude:"-2.51056", Longitude:"-43.43694", Municipio:"Primeira Cruz" },
  { Nome:"Restaurante - Pinheiro", Tipo:"restaurante", Latitude:"-2.534", Longitude:"-45.09889", Municipio:"Pinheiro" },
  { Nome:"Restaurante - Caxias", Tipo:"restaurante", Latitude:"-4.86167", Longitude:"-43.36306", Municipio:"Caxias" }
];
