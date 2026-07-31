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
    fotoAlt: z.string(),
    ordem: z.number().default(0),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    categoria: z.string().default('audiovisuais'),
    tipo: z.string().default('[Serviço de acessibilidade]'),
    cliente: z.string().optional(),
    imagem: z.string().optional(),
    imagemAlt: z.string().optional(),
    ano: z.string().optional(),
    ordem: z.number().default(0),
  }),
});

export const collections = { servicos, equipe, portfolio };