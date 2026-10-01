// Categorias do portfólio — rótulo, descrição e ordem de exibição.
// A chave é o valor do campo `categoria` nos arquivos de conteúdo.
export interface CategoriaInfo {
  label: string;
  descricao: string;
  ordem: number;
}

export const CATEGORIAS: Record<string, CategoriaInfo> = {
  filmes: {
    label: 'Filmes',
    descricao: 'Longas, médias e curtas-metragens de ficção, documentário e experimental.',
    ordem: 1,
  },
  series: {
    label: 'Séries',
    descricao: 'Séries, webséries e obras seriadas para cinema, TV e internet.',
    ordem: 2,
  },
  audiovisuais: {
    label: 'Filmes e Séries',
    descricao: 'Obras audiovisuais — ficção, documentário, experimental e seriadas.',
    ordem: 3,
  },
  educacionais: {
    label: 'Educacionais',
    descricao: 'Materiais educativos, vídeos-formativos e conteúdos para escolas e projetos socioeducativos.',
    ordem: 4,
  },
  audiolivros: {
    label: 'Audiolivros',
    descricao: 'Obras literárias em áudio, com narração e recursos de acessibilidade.',
    ordem: 5,
  },
  exposicoes: {
    label: 'Exposições',
    descricao: 'Mostras expográficas e obras instalativas com recursos de acessibilidade.',
    ordem: 6,
  },
  mostras: {
    label: 'Mostras',
    descricao: 'Festivais e mostras de cinema com curadoria e sessões acessíveis.',
    ordem: 7,
  },
};

export function labelCategoria(cat: string): string {
  return CATEGORIAS[cat]?.label ?? cat;
}

export function descricaoCategoria(cat: string): string {
  return CATEGORIAS[cat]?.descricao ?? '';
}

export function ordemCategoria(cat: string): number {
  return CATEGORIAS[cat]?.ordem ?? 99;
}
