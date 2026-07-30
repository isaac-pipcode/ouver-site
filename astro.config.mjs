import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configuração do site Ouver.
// output: 'static' gera HTML puro — melhor para performance, SEO e acessibilidade.
// Trocar o adapter conforme a hospedagem escolhida (Cloudflare Pages, Netlify ou Vercel).
export default defineConfig({
  site: 'https://ouveracessibilidade.com.br',
  output: 'static',
  integrations: [sitemap()],
  // Quando definir a hospedagem, adicionar o adapter, ex.:
  // import cloudflare from '@astrojs/cloudflare';
  // adapter: cloudflare(),
});
