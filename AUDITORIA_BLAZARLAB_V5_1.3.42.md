# Auditoria de temas — BlazarLab V5 1.3.42

**Objetivo:** corrigir discrepâncias de cor da paleta Ouro Estelar nos fundos AGN/Nebulosa e nos controles da seção “Uma fonte, uma banda, três lentes”; corrigir também o indicador da aba ativa na Rosa Cósmico clara e evitar herança de preferências locais da V4.

## Correções realizadas

1. **AGN e Nebulosa em Ouro Estelar:** criadas oito variantes SVG próprias — desktop/mobile, claro/escuro — com destaques dourados. As regras de fundo e suas sobreposições agora usam os SVGs dourados, em vez de manterem as versões rosa/vinho.
2. **Três lentes:** as abas Sample Entropy, Fisher–Shannon e MSE-WPE / CI passam a ter estados coerentes para normal, hover, ativo, foco, marcador e número em Ouro Estelar claro/escuro.
3. **Rosa Cósmico claro:** corrigidos os estilos do número, indicador e marca da aba selecionada que podiam conservar cores incompatíveis.
4. **Outros controles:** harmonizados estados selecionados de tema/paleta, faixas de energia, ferramentas dos gráficos, som e seleção de fundos para respeitar a paleta.
5. **Dados científicos:** os ajustes alteram a interface e ilustrações de fundo, não a paleta semântica das séries dos gráficos nem fórmulas ou dados sintéticos.
6. **Preferências V5 isoladas:** `index.html` e `blazarlab.js` usam agora `blazarlab-v5-theme`, `blazarlab-v5-accent-palette` e `blazarlab-v5-background-mode`. V4 e V5 vivem sob o mesmo domínio e, sem isso, podem compartilhar inadvertidamente o armazenamento local. Uma instalação limpa continua começando em tema escuro + Azul Original + Sem fundo; escolhas feitas na V5 continuam podendo ser lembradas nas visitas seguintes.

## Verificações concluídas

- `node --check blazarlab.js`: **passou**.
- Testes Node em `tests/*.cjs`: **28/28 passaram**, incluindo o novo `gold-theme-coherence.cjs`.
- Parse do CSS com `tinycss2`: **1.228 regras de topo, 0 erros de parse e 0 erros de declaração**.
- SVGs em `assets/`: **45 arquivos, todos válidos como XML**.
- Referências de assets locais no CSS: **42 caminhos únicos, nenhum ausente**.
- Referências de assets nos três arquivos centrais (`index.html`, `blazarlab.js`, `styles.css`): **nenhum arquivo ausente**.
- O teste novo confirma a existência das oito variantes douradas, os seletores dourados das abas ativa/ARIA-selected em claro/escuro, a correção da Rosa clara e o isolamento das chaves de armazenamento da V5.

## Limitação da verificação

A execução de navegador/headless foi bloqueada pelo ambiente com `ERR_BLOCKED_BY_ADMINISTRATOR`. Portanto, **não afirmo que tenha concluído uma revisão visual interativa real em navegador** nem testes em dispositivos físicos. A checagem concluída combina testes automatizados locais, verificações estáticas de CSS/HTML/JavaScript e validação XML dos SVGs; a confirmação visual deve ser feita após a publicação.

## Escopo do pacote

A página pública V5 foi consultada, mas um ZIP-fonte exato da V5 não estava disponível entre os arquivos da sessão. Por esse motivo, este trabalho inclui:

- **Patch aditivo recomendado:** `blazarlab-v5-1.3.42-patch-temas.zip`, com o CSS adicional, os oito SVGs e instruções para integrar à V5 atual sem substituir o resto do site.
- **Pacote completo reconstruído:** `blazarlab-v5-1.3.42-correcao-temas.zip`, montado a partir do pacote local 1.3.41 mais recente e adaptado para o destino V5. Como não é cópia byte a byte do repositório V5 publicado, revise as diferenças antes de substituir os arquivos do site.

O site público **não foi publicado nem alterado remotamente** por este processo.
