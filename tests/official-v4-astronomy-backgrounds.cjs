#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const html = read('index.html');
const js = read('blazarlab.js');
const css = read('styles.css');
const version = read('VERSION').trim();
assert.equal(version, '1.3.42', 'versão oficial V4');
assert.match(html, /<html lang="pt-BR" data-theme="dark" data-accent-palette="blue" data-background-mode="normal">/, 'primeiro acesso deve usar tema escuro, Azul Original e Sem fundo');
assert.match(js, /let initialPalette='blue',initialBackground='normal'/, 'fallback seguro se localStorage estiver bloqueado');
assert.match(js, /blazarlab-v5-accent-palette/);
assert.match(js, /blazarlab-v5-background-mode/);
assert.match(js, /blazarlab-v5-theme/);
assert.doesNotMatch(js, /blazarlab-gold-preview/,'nenhuma preferência antiga da prévia deve afetar a estreia da versão oficial');
assert.doesNotMatch(html, /prototype-ribbon|PRÉVIA INTERATIVA|não altera a versão oficial/i, 'o site não pode continuar rotulado como prévia');
assert.match(html, /<strong>Ouro Estelar<\/strong><small>Tons dourados<\/small>/, 'Ouro Estelar integra a identidade oficial, não é mais chamado de experimental');
assert.doesNotMatch(html + '\n' + css + '\n' + js, /cosmic-web|Teia Cósmica/i, 'Teia Cósmica deve estar removida do código executável');
assert.doesNotMatch(html, /data-background-choice="cosmic-web"/);
assert.match(html, /data-background-choice="einstein-ring"/);
assert.match(html, /data-background-choice="event-horizon"/);
assert.match(html, /data-background-choice="normal" aria-pressed="true"/);
assert.match(html, /data-accent-choice="blue" aria-pressed="true"/);
assert.match(css, /--astro-art-dark:url\('assets\/einstein-ring-blue\.svg'\)/);
assert.match(css, /--astro-art-dark:url\('assets\/einstein-ring-rose\.svg'\)/);
assert.match(css, /--astro-art-dark:url\('assets\/einstein-ring-gold\.svg'\)/);
assert.match(css, /--astro-art-dark:url\('assets\/event-horizon-blue\.svg'\)/);
assert.match(css, /--astro-art-dark:url\('assets\/event-horizon-rose\.svg'\)/);
assert.match(css, /--astro-art-dark:url\('assets\/event-horizon-gold\.svg'\)/);
assert.match(css, /--astro-art-mobile-dark:url\('assets\/einstein-ring-blue-mobile\.svg'\)/);
assert.match(css, /--astro-art-mobile-light:url\('assets\/event-horizon-rose-light-mobile\.svg'\)/);
assert.match(css, /body::before\{\s*background-image:var\(--astro-mobile-overlay-dark\),var\(--astro-art-mobile-dark\)/, 'mobile usa arte de viewport, não fundo escalado pela altura do site');
assert.match(css, /background-size:100% 100%,auto 100vh/, 'a camada astronômica mobile é ancorada ao viewport');
assert.match(js, /function recolorExistingChartsForSecretPalette\(\) \{ return; \}/, 'a paleta não remapeia cores dos dados nos SVGs de gráficos');
assert.match(html, /https:\/\/contateste10m10-lgtm\.github\.io\/BlazarLab-V5\//, 'metadados de produção para V4');
assert.match(read('README-GITHUB-UPLOAD.md'), /BlazarLab-V5/);
const palettes = ['blue', 'rose', 'gold'];
const modes = ['einstein-ring', 'event-horizon'];
const themes = ['dark', 'light'];
let artCount=0;
for (const palette of palettes) for (const mode of modes) for (const theme of themes) {
  const suffix = theme === 'light' ? '-light' : '';
  const name = `${mode}-${palette}${suffix}.svg`;
  const mobile = `${mode}-${palette}${suffix}-mobile.svg`;
  for (const asset of [name, mobile]) {
    const full=path.join(root,'assets',asset);
    assert.ok(fs.existsSync(full), `arte ${asset} existe`);
    assert.ok(fs.statSync(full).size>1000, `arte ${asset} não está vazia`);
    assert.match(read(`assets/${asset}`), /<svg[^>]+viewBox="0 0 1600 1000"/, `SVG ${asset} tem viewBox explícito`);
    artCount++;
  }
}
console.log(`OK: V4 oficial inicializa Azul + Sem fundo; Teia removida; ${artCount} variantes SVG por paleta/tema mobile/desktop; identidade e gráficos independentes — BlazarLab ${version}.`);
