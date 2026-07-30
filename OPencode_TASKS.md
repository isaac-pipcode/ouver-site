# Ouver Site — Instruções para OpenCode

## Contexto
Você está construindo o site da Ouver Acessibilidade, empresa de acessibilidade audiovisual.
Leia CLAUDE.md e README.md antes de começar — eles têm a arquitetura, componentes e requisitos de acessibilidade.

## Regras invioláveis (do CLAUDE.md)
- Acessibilidade é prioridade sobre estética
- Nunca usar `alt` igual a nome de arquivo
- Nunca usar `--cor-terra` como texto sobre fundo claro (usar `--cor-terra-escuro`)
- Um `<h1>` por página (vem do Hero); hierarquia correta H2, H3
- Nunca inventar dados (clientes, números). Usar placeholders comentados
- `npm run build` precisa passar sem erros

## Páginas a criar

### 1. `/quem-somos` → src/pages/quem-somos.astro
Layout: Base
Blocos:
- Hero: "A Ouver" / "A Ouver é uma empresa de acessibilidade audiovisual..."
- H2 "No que acreditamos" — lista de valores:
  * "Acessibilidade é direito, não favor"
  * "Acessibilidade desde a concepção"
  * "Técnica com sensibilidade"
  * "Com as pessoas, não sobre elas"
- H2 "Quem faz a Ouver" — equipe (ler da collection equipe)
- Bloco de conversão: link para orçamento

### 2. `/solucoes` → src/pages/solucoes/index.astro
Hub de soluções. Hero + 3 cards (CardSolucao) para cada macroárea.
Hero: "Nossas soluções" / descrição
Três cards:
- Tradução Audiovisual Acessível → /solucoes/traducao-audiovisual-acessivel
- Produção Audiovisual → /solucoes/producao-audiovisual
- Inovação → /solucoes/inovacao
CTA final: "Solicitar orçamento"

### 3. `/solucoes/traducao-audiovisual-acessivel` → src/pages/solucoes/traducao-audiovisual-acessivel.astro
Hero + conteúdo sobre:
- Modalidades: audiodescrição, Libras, LSE (Legendagem para Surdos e Ensurdecidos)
- Contextos: filmes, séries, quadrinhos, festivais, mostras
- Consultoria
Conversão no final para orçamento.

### 4. `/solucoes/producao-audiovisual` → src/pages/solucoes/producao-audiovisual.astro
Hero + conteúdo sobre:
- Produção sob demanda (acessível na concepção)
- Materiais audiovisuais educativos

### 5. `/solucoes/inovacao` → src/pages/solucoes/inovacao.astro
Hero + conteúdo sobre:
- Formação
- Pesquisa
- Soluções digitais
Dados reais em [colchetes] — não inventar

### 6. `/portfolio` → src/pages/portfolio.astro
Listar projetos da collection portfolio.
Placeholder: avisar que dados precisam ser preenchidos.

### 7. `/orcamento` → src/pages/orcamento.astro
Formulário de orçamento. Requisitos:
- Cada campo com `<label>` visível + `for`/`id`
- Campos obrigatórios indicados em texto
- Mensagens de erro em texto (não só cor)
- `aria-live` para confirmação
- Botão "Enviar"

### 8. `/contato` → src/pages/contato.astro
Página simples: e-mail e/ou WhatsApp de contato.

### 9. `/acessibilidade` → src/pages/acessibilidade.astro
Declaração de acessibilidade: compromisso com WCAG 2.2, Lei 13.146/2015.

### 10. Completar Home (`/`) → src/pages/index.astro
Adicionar blocos 3-6:
- Bloco 3: "Por que acessibilidade importa"
- Bloco 4: Prova social (placeholder)
- Bloco 5: Quem somos (resumo com link)
- Bloco 6: Conversão final

## Ordens para execução
1. Primeiro as páginas sem dependências: quem-somos, solucoes, contato, acessibilidade
2. Depois as de serviço: TAVA, producao, inovacao
3. Depois orcamento (formulário), portfolio e completar home
4. Rodar `npm run build` ao final para validar