# BlazarLab V5 — correção de consistência das paletas (1.3.42)

## Correções
- AGN e Nebulosa agora usam arte e overlays dourados próprios quando a paleta Ouro Estelar está ativa, em tema claro e escuro e em telas estreitas.
- As superfícies de página, cabeçalho, cartões e navegação acompanham o Ouro Estelar, sem herdar o banho vinho/vermelho da Rosa Cósmica.
- Os três seletores de método da seção “Uma fonte, uma banda, três lentes” possuem estados inativo, hover, foco e ativo próprios para Ouro Estelar claro/escuro.
- Corrigido o marcador numerado e a seta da aba ativa no tema claro Rosa Cósmico.
- Ajustados os estados ativos/hover de controles de banda, ferramentas de gráfico, tema e botões de ação para refletir a paleta.
- Nenhuma regra de recoloração foi aplicada às séries de dados dos gráficos.

## Estado inicial
Tema escuro, paleta Azul original e fundo astronômico desligado. A escolha de tema/paleta/fundo continua independente.

- Preferências salvas agora usam a namespace `blazarlab-v5-*`, sem herdar o tema, paleta ou fundo guardado pela V4.
