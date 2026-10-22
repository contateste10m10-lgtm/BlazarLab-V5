# Publicação do BlazarLab V5 — versão 1.3.42

Este pacote corrige a coerência entre a paleta Ouro Estelar, os fundos AGN/Nebulosa e os estados interativos da seção “Uma fonte, uma banda, três lentes”. Também corrige o marcador da aba ativa no tema claro Rosa Cósmico.

## Atualizar GitHub Pages

1. Faça backup do conteúdo atual do repositório `BlazarLab-V5`.
2. Extraia `blazarlab-v5-1.3.42-correcao-temas.zip` numa pasta temporária.
3. Copie o conteúdo da pasta extraída para a raiz do repositório `BlazarLab-V5`, mantendo `index.html`, `styles.css`, `blazarlab.js` e a pasta `assets/` na raiz publicada.
4. Preserve também `.nojekyll`, `tests/`, `updates/`, `.github/workflows/` e os arquivos de documentação. Não envie somente o CSS: as variantes douradas dos fundos estão em `assets/`.
5. Publique na branch/pasta já usada pelo GitHub Pages e aguarde a atualização. Eu não publico diretamente no seu GitHub; o pacote local não altera por si só a página online.
6. Depois da publicação, teste tema claro/escuro + Azul/Rosa/Ouro; os fundos AGN, Nebulosa, Anel de Einstein, Horizonte de Eventos e Sem fundo; e as três abas de método sob o texto “Uma fonte, uma banda, três lentes”.

**BlazarLab-V5 — URL canônica de produção:** `https://contateste10m10-lgtm.github.io/BlazarLab-V5/`. Esta documentação identifica o destino pretendido, mas não significa que os arquivos já tenham sido publicados nele.

## Autotestes locais

Com Node.js, dentro da pasta extraída, execute:

```sh
node --check blazarlab.js
for test in tests/*.cjs; do node "$test" || exit 1; done
```

Os testes emulados não substituem uma conferência final em aparelhos móveis reais.
