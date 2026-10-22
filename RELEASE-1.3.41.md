# BlazarLab V4 — auditoria de release 1.3.41

**Status:** pacote oficial preparado para publicação; ainda não publicado no GitHub Pages.  
**Destino canônico preparado:** https://contateste10m10-lgtm.github.io/BlazarLab-V4/  
**Base de referência:** página BlazarLab-V4 aberta durante a auditoria em 20/10/2026.

## O que foi integrado

- Removida a faixa “Prévia interativa · Ouro Estelar” para que a interface da versão 1.3.41 não se apresente como protótipo.
- Removida a opção Teia Cósmica dos controles e dos recursos de execução. Não há arquivo `cosmic-web` nos assets de release.
- Mantidos AGN, Nebulosa e Sem fundo; adicionados oficialmente Anel de Einstein e Horizonte de Eventos.
- Os dois novos fundos têm variantes SVG dedicadas para Azul Original, Rosa Cósmico e Ouro Estelar, nos temas claro/escuro e em composições específicas para mobile.
- Ouro Estelar integra agora a interface como paleta; o rótulo não a chama de experimental.
- Primeiro acesso: tema escuro, Azul Original e Sem fundo. As preferências da versão anterior de teste usam chaves diferentes e não devem contaminar o novo estado inicial. Depois da primeira escolha, tema, paleta e fundo são lembrados pelo navegador.
- As cores científicas da curva multibanda permanecem independentes da paleta de interface. A inspeção do DOM da curva antes/depois da troca de paleta deu o mesmo conteúdo SVG.
- Canonical, `og:url`, `og:image` e `twitter:image` apontam para `BlazarLab-V4`.
- Nenhuma fórmula, parâmetro metodológico ou série sintética foi alterada nesta versão.

## Resultados dos testes

| Verificação | Resultado |
|---|---:|
| Autotestes Node.js (`tests/*.cjs`) | **27/27 aprovados** |
| `node --check blazarlab.js` | **Aprovado** |
| Variantes SVG dos dois novos fundos | **24/24 presentes** (2 fundos × 3 paletas × 2 temas × 2 tamanhos) |
| Integridade XML dos SVGs incluídos | **38/38 válidos** |
| Verificações de navegador Chromium | **9/9 aprovadas** |
| Matriz responsiva | **96/96 estados aprovados** |
| Erros de JavaScript/console observados | **0** |
| Falhas de requisição observadas no documento inline de teste | **0** |
| Capturas móveis | **12 estados** a 390 × 844 px |
| Capturas desktop | **12 estados** a 1280 × 900 px, além das capturas do estado inicial |

A matriz responsiva cobre larguras de 320, 360, 390, 430, 600, 768, 1024 e 1280 px, cruzadas com tema claro/escuro, paleta Azul/Rosa/Ouro e os dois fundos novos. Em cada estado foi verificada a arte correspondente, a ausência de rolagem horizontal indevida e a geometria do cabeçalho. Os modos existentes AGN, Nebulosa e Sem fundo também foram verificados.

O teste com controles reais no Chromium abriu o seletor, escolheu Rosa Cósmico e Anel de Einstein, e confirmou o estado selecionado. A comparação do SVG da curva multibanda antes e depois da mudança de paleta manteve o mesmo conteúdo.

## Leitura visual mobile/desktop

As capturas de viewport foram inspecionadas como comparação visual. O **Anel de Einstein** aparece como arcos/lente gravitacional; o **Horizonte de Eventos** usa um disco alongado e sombra central. As artes ficam atrás do conteúdo, as cores se adaptam à paleta escolhida e o tema claro usa variantes mais claras. A composição mobile está ancorada à altura visível da janela, não à altura total da página, e as capturas não mostram cortes laterais do documento.

Arquivos de evidência no pacote de auditoria:
- `comparacao-mobile.png`: 12 combinações de tema, paleta e fundo.
- `comparacao-desktop.png`: 12 combinações de tema, paleta e fundo.
- `browser-audit.json`: resultados detalhados dos estados e controles.
- `node-autotests.json` e `node-autotests.txt`: saída dos 27 testes de código.
- `screenshots/`: capturas dos estados individuais e da abertura padrão.

## Limitações e publicação

A página publicada foi consultada e ainda mostrava a antiga faixa de prévia e a opção Teia Cósmica no momento da inspeção. **Não enviei arquivos ao GitHub e não alterei o site ao vivo.** O pacote 1.3.41 está pronto para ser copiado para a raiz do repositório `BlazarLab-V4`; só depois do envio e do processamento do GitHub Pages a URL pública passará a servir esta versão.

Os testes visuais foram executados em Chromium com viewport emulado e o conteúdo/recursos locais foram incorporados no documento de teste porque o ambiente de execução bloqueou o servidor HTTP local. Isso testa o layout e as interações no motor Chromium, mas não substitui teste de rede na publicação real. Não foram feitos testes em iPhone/iOS Safari, Android físico, VoiceOver ou TalkBack. Recomenda-se conferi-los depois da publicação.
