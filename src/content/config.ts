// Content Collections do Astro — define o schema dos dados estruturados do site.
// Permite versionar conteúdo (serviços, equipe, portfólio) como arquivos, com validação de tipos.
import { defineCollection, z } from 'astro:content';

const servicos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    macroarea: z.enum(['acessibilidade', 'producao', 'inovacao']),
    descricaoCurta: z.string(),
    ordem: z.number().default(0),
  }),
});

const equipe = defineCollection({
  type: 'content',
  schema: z.object({
    nome: z.string(),
    cargo: z.string(),
    foto: z.string().optional(),
    fotoAlt: z.string(), // texto alternativo OBRIGATÓRIO — descritivo, nunca nome de arquivo
    ordem: z.number().default(0),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    cliente: z.string().optional(),
    tipo: z.string(), // ex.: "Audiodescrição", "Produção", "LSE"
    imagem: z.string().optional(),
    imagemAlt: z.string(),
    ano: z.number().optional(),
  }),
});

export const collections = { servicos, equipe, portfolio };
