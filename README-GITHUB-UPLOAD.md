# Publicação do BlazarLab V4 — versão 1.3.41 oficial

Esta versão adiciona os fundos Anel de Einstein e Horizonte de Eventos ao seletor oficial, em cores próprias para Azul Original, Rosa Cósmico e Ouro Estelar. AGN e Nebulosa continuam disponíveis. A Teia Cósmica foi removida. A abertura inicial é sempre Azul Original + tema escuro + Sem fundo; a partir da primeira escolha, as preferências desta versão são lembradas no navegador. O som segue desligado até ativação explícita.

## Publicar no GitHub Pages

1. Faça backup do conteúdo atual do repositório `BlazarLab-V4`.
2. Extraia o ZIP `blazarlab-v4-oficial-1.3.41-fundos-astronomicos.zip`.
3. Abra a pasta `blazarlab_v1.3.41/` e copie **todo o seu conteúdo** para a raiz do repositório `BlazarLab-V4`, mantendo `index.html` na raiz publicada.
4. Publique os arquivos juntos na branch/pasta que o GitHub Pages já utiliza. Inclua `index.html`, `styles.css`, `blazarlab.js`, `assets/`, `tests/`, `updates/`, documentação, favicon e `.nojekyll`.
5. Aguarde o GitHub Pages terminar a publicação e atualize com cache limpo. A página online só muda depois que estes arquivos forem enviados ao repositório.
6. No site publicado, confirme o estado inicial Azul Original + Sem fundo; depois teste AGN, Nebulosa, Anel de Einstein e Horizonte de Eventos nas paletas Azul, Rosa e Ouro, em tema claro/escuro.

**BlazarLab-V4 de produção/canônico:** `https://contateste10m10-lgtm.github.io/BlazarLab-V4/`.

## Autotestes locais

Com Node.js, dentro da pasta `blazarlab_v1.3.41/`, execute:

```sh
node --check blazarlab.js
for test in tests/*.cjs; do node "$test" || exit 1; done
```

A inspeção automatizada em Chromium é executada separadamente na auditoria anexada. Testes reais em Safari/iOS/VoiceOver e Chrome/Android/TalkBack continuam recomendados e não são substituídos por emulação de viewport.
