#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'blazarlab.js'), 'utf8');
assert.equal(fs.readFileSync(path.join(root, 'VERSION'), 'utf8').trim(), '1.3.42');
assert.match(html, /localStorage\.getItem\('blazarlab-v5-theme'\)/, 'tema inicial deve ler apenas as preferências da V5');
for (const runtimeFile of ['index.html','blazarlab.js']) {
  const runtime = fs.readFileSync(path.join(root, runtimeFile), 'utf8');
  assert.doesNotMatch(runtime, /blazarlab-v4-(?:theme|accent-palette|background-mode)/, `não herdar preferências antigas da V4 em ${runtimeFile}`);
}
assert.match(js, /localStorage\.getItem\('blazarlab-v5-accent-palette'\)/, 'paleta deve ser isolada dentro da V5');
assert.match(js, /localStorage\.getItem\('blazarlab-v5-background-mode'\)/, 'fundo deve ser isolado dentro da V5');
assert.match(html, /<link rel="canonical" href="https:\/\/contateste10m10-lgtm\.github\.io\/BlazarLab-V5\//);
assert.match(html, /<html[^>]*data-theme="dark"[^>]*data-accent-palette="blue"[^>]*data-background-mode="normal"|<html[^>]*data-theme="dark"[^>]*data-background-mode="normal"[^>]*data-accent-palette="blue"/);
const expected = [
  'agn-background-gold.svg','agn-background-light-gold.svg','agn-background-mobile-gold.svg','agn-background-mobile-light-gold.svg',
  'nebula-background-gold.svg','nebula-background-light-gold.svg','nebula-background-mobile-gold.svg','nebula-background-mobile-light-gold.svg'
];
for (const asset of expected) assert.ok(fs.existsSync(path.join(root, 'assets', asset)), `asset dourado ausente: ${asset}`);
for (const mode of ['agn','nebula']) {
  assert.ok(css.includes(`data-background-mode="${mode}"] body{background-color:#100F13;background-image:linear-gradient`) && css.includes(`assets/${mode}-background-gold.svg`), `fundo escuro dourado não configurado: ${mode}`);
  assert.ok(css.includes(`data-theme="light"][data-accent-palette="gold"][data-background-mode="${mode}"] body{background-color:#FFFCF4`) && css.includes(`assets/${mode}-background-light-gold.svg`), `fundo claro dourado não configurado: ${mode}`);
  assert.ok(css.includes(`data-theme="dark"][data-accent-palette="gold"][data-background-mode="${mode}"] body::before`) && css.includes(`assets/${mode}-background-mobile-gold.svg`), `fundo mobile dourado não configurado: ${mode}`);
  assert.ok(css.includes(`data-theme="light"][data-accent-palette="gold"][data-background-mode="${mode}"] body::before`) && css.includes(`assets/${mode}-background-mobile-light-gold.svg`), `fundo mobile claro dourado não configurado: ${mode}`);
}
for (const theme of ['dark','light']) {
  assert.match(css, new RegExp(`html\\[data-theme="${theme}"\\]\\[data-accent-palette="gold"\\] \\.method-tab\\.is-active`), `aba ativa dourada ausente no tema ${theme}`);
  assert.match(css, new RegExp(`html\\[data-theme="${theme}"\\]\\[data-accent-palette="gold"\\] \\.method-tab\\[aria-selected="true"\\]`), `estado aria-selected dourado ausente no tema ${theme}`);
}
for (const lens of ['Sample Entropy','Fisher–Shannon','MSE-WPE']) assert.ok(html.includes(lens), `lente de método ausente: ${lens}`);
assert.match(css, /html\[data-theme="light"\]\[data-accent-palette="rose"\] \.method-tab\.is-active \.method-tab-index/, 'número de aba ativa rosa claro sem correção');
assert.match(css, /html\[data-accent-palette="gold"\] \.method-tab:focus-visible/, 'foco visível dourado ausente');
assert.match(css, /html\[data-accent-palette="gold"\] \.theme-button\[aria-pressed="true"\]/, 'botão de tema selecionado dourado ausente');
assert.match(css, /html\[data-accent-palette="gold"\] \.secret-sound-toggle\[aria-pressed="true"\]/, 'estado de som dourado ausente');
assert.doesNotMatch(js, /setDataset\(['"](line|series|chart)[^)]*accent/i, 'paleta não deve reescrever os dados/series dos gráficos');
for (const asset of expected) {
  const svg = fs.readFileSync(path.join(root, 'assets', asset), 'utf8');
  assert.doesNotMatch(svg, /#(?:FECDD3|FDA4AF|9F1239|881337|E11D48|E30613)\b/i, `arte dourada mantém hexadecimal rosa: ${asset}`);
}
console.log('OK: V5 1.3.42 — variantes AGN/Nebulosa douradas desktop/mobile, tema claro/escuro, abas de método e interações.');
