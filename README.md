# Site da Ouver Acessibilidade

Site institucional da Ouver, empresa de acessibilidade audiovisual. Construído em **Astro**
(gerador de site estático), pensado para ser editado via código + Git e publicado por deploy
automático. Este README orienta a continuação do trabalho — leia-o por inteiro antes de começar.

> **Princípio que rege tudo:** este é o site de uma empresa de acessibilidade. Ele precisa ser
> uma demonstração de excelência em acessibilidade, não apenas "acessível o suficiente". Cada
> decisão de código deve respeitar os requisitos da seção [Acessibilidade](#acessibilidade).

---

## Contexto do projeto

O site substitui um site anterior feito no Wix, que tinha três problemas centrais:
1. **Arquitetura de página única** com navegação fictícia (links que eram âncoras de rolagem).
2. **Conversão fraca**: dois CTAs concorrentes, sem funil claro.
3. **Acessibilidade falha**: imagens com `alt` igual ao nome do arquivo, links de redes sociais
   apontando para perfis-placeholder do Wix.

O redesenho resolve os três. A documentação completa de arquitetura, conteúdo e acessibilidade
está nos documentos `.docx` que acompanham o projeto (ver `/docs` ou a entrega original).

## Arquitetura de informação

Estrutura hierárquica rasa, organizada em **três macroáreas**:

```
Home
├── Quem somos
├── Soluções (hub)
│   ├── Tradução Audiovisual Acessível   (macroárea ACESSIBILIDADE — core)
│   │     • modalidades técnicas (audiodescrição, Libras, LSE)
│   │     • contextos (filmes, séries, quadrinhos, festivais, mostras)
│   │     • consultoria
│   ├── Produção Audiovisual              (macroárea PRODUÇÃO)
│   │     • sob demanda (acessível na concepção)
│   │     • materiais educativos
│   └── Inovação                          (macroárea INOVAÇÃO)
│         • formação · pesquisa · soluções digitais
├── Portfólio
├── Orçamento   ← ponto único de conversão; tudo converge aqui
└── Contato     ← via secundária
```

Princípios: profundidade rasa (nada a mais de 2 cliques), homogeneidade de classificação
(cada nível agrupa itens da mesma natureza), convergência de funil (toda página leva ao Orçamento).

## Estrutura de pastas

```
src/
  layouts/Base.astro        → layout de todas as páginas (head, header, footer, skip-link)
  components/
    Header.astro            → navegação principal (links para páginas REAIS, não âncoras)
    Footer.astro            → rodapé (CORRIGIR links de redes sociais)
    Hero.astro              → bloco herói reutilizável (recebe o H1 da página)
    CardSolucao.astro       → cartão de macroárea (home e hub)
  pages/
    index.astro             → Home (feita parcialmente, como referência de padrão)
    [criar as demais]       → ver "Páginas a criar"
  content/
    config.ts               → schema das Content Collections (servicos, equipe, portfolio)
    equipe/                  → um .md por pessoa (exemplo: thais-mandarino.md)
    servicos/ portfolio/     → a popular
  styles/global.css         → design tokens e regras globais de acessibilidade
public/images/              → imagens (cada uma precisa de alt descritivo no componente que a usa)
```

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera o site estático em /dist
npm run preview  # pré-visualiza o build
```

Requer Node.js (versão LTS recente). A hospedagem será Cloudflare Pages, Netlify ou Vercel —
ao escolher, adicionar o adapter correspondente em `astro.config.mjs` (instruções comentadas lá).

## Páginas a criar

A Home está parcialmente montada como referência de padrão. Faltam (conteúdo pronto nos `.docx`):

- [ ] `src/pages/quem-somos.astro` — conteúdo em `Institucionais_conteudo.docx` §2
- [ ] `src/pages/solucoes/index.astro` — hub; `Institucionais_conteudo.docx` §3
- [ ] `src/pages/solucoes/traducao-audiovisual-acessivel.astro` — `TAVA_conteudo.docx`
- [ ] `src/pages/solucoes/producao-audiovisual.astro` — `Producao_conteudo.docx`
- [ ] `src/pages/solucoes/inovacao.astro` — `Inovacao_conteudo.docx`
- [ ] `src/pages/portfolio.astro` — usar a collection `portfolio`
- [ ] `src/pages/orcamento.astro` — `Orcamento_conteudo.docx` (formulário acessível, ver abaixo)
- [ ] `src/pages/contato.astro` — via secundária, simplificada
- [ ] `src/pages/acessibilidade.astro` — declaração de acessibilidade
- [ ] Completar a Home (blocos 3–6)

Cada página de serviço segue o mesmo esqueleto de 8 blocos descrito nos `.docx`
(herói → o que é → demonstração → o que oferecemos → como funciona → conformidade → prova social → conversão).

## Acessibilidade

**Requisitos não negociáveis** (base: WCAG 2.2 e Lei nº 13.146/2015). Ao criar qualquer página
ou componente, garantir:

- **Um único `<h1>` por página** (vem do `Hero`). Hierarquia correta: `h2` para seções, `h3` para subdivisões. Nunca pular níveis.
- **HTML semântico**: `header`, `nav`, `main`, `section` (com `aria-labelledby`), `article`, `footer`.
- **Imagens**: todo `alt` deve ser descritivo e significativo. **Nunca** o nome do arquivo (erro do site antigo). Imagem decorativa: `alt=""`.
- **Contraste**: mínimo 4,5:1 para texto. Navy (`--cor-navy`) sobre paper funciona. **Não** usar `--cor-terra` como texto sobre fundo claro — usar `--cor-terra-escuro`.
- **Teclado**: tudo navegável por teclado, em ordem lógica, com `:focus-visible` visível (já no global.css). Nunca remover outline sem substituir.
- **Skip link**: já incluído no Base.astro (primeiro elemento focável).
- **Links/botões**: texto sempre descritivo ("Solicitar orçamento", nunca "clique aqui" ou "saiba mais" sem contexto — usar `aria-label` quando necessário).
- **Formulário de orçamento**: cada campo com `<label>` visível e associado (`for`/`id`); mensagens de erro em texto (não só cor); campos obrigatórios indicados em texto; confirmação de envio anunciada a leitores de tela (`aria-live`).
- **Vídeos**: legendas em texto real (track), audiodescrição/Libras ativáveis, controles por teclado, sem autoplay com som, com descrição textual alternativa.
- **Movimento**: `prefers-reduced-motion` já respeitado no global.css.

**Antes de publicar**: testar com leitor de tela (NVDA no Windows, VoiceOver no Mac), rodar o
Lighthouse (meta: 100 em Acessibilidade), e idealmente validar com pessoas com deficiência.

## Identidade visual

Tokens atuais em `src/styles/global.css` (`--cor-navy`, `--cor-terra`, `--cor-paper`). Estão
sujeitos a atualização após o **redesenho da logomarca** (ver briefing do Claude Design entregue
à parte). Quando a nova identidade estiver pronta, atualizar os tokens e o SVG do logo no Header.

## Convenções

- Conteúdo e nomes de arquivo em **português** (o público é brasileiro).
- Comentários no código explicam o *porquê*, sobretudo decisões de acessibilidade.
- Dados reais ausentes ficam como `[colchetes]` ou placeholders comentados — **nunca inventar**
  prova social (clientes, números, depoimentos).
