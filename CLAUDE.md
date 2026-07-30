# Instruções para o Claude Code

Você está continuando a construção do site da Ouver Acessibilidade. **Leia o README.md primeiro** —
ele tem a arquitetura, a estrutura de pastas e os requisitos de acessibilidade.

## O que já existe
- Configuração Astro, layout base, header, footer, componentes Hero e CardSolucao.
- Home parcialmente montada (`src/pages/index.astro`) como referência de padrão.
- Schema das Content Collections (`src/content/config.ts`) e um exemplo de equipe.
- CSS global com design tokens e regras de acessibilidade.

## O que fazer (ordem sugerida)
1. Criar as páginas faltantes listadas no README ("Páginas a criar"), seguindo o conteúdo dos `.docx`.
2. Popular as Content Collections (equipe, portfólio) conforme os dados forem fornecidos.
3. Construir o formulário de orçamento com TODOS os requisitos de acessibilidade do README.
4. Estilizar os componentes respeitando os tokens e o contraste mínimo.

## Regras invioláveis
- **Acessibilidade é prioridade sobre estética.** Ver seção Acessibilidade do README.
- **Nunca** usar `alt` igual a nome de arquivo. **Nunca** `--cor-terra` como texto sobre fundo claro.
- **Nunca** inventar dados (clientes, números, depoimentos). Use placeholders comentados.
- Um `<h1>` por página; hierarquia de cabeçalhos correta.
- Conteúdo em português.

## Como validar seu trabalho
- `npm run build` precisa passar sem erros.
- Rodar Lighthouse e mirar 100 em Acessibilidade.
- Conferir navegação por teclado e estrutura de cabeçalhos antes de considerar uma página pronta.
