# Portfólio Next.js

Este é o portfólio pessoal de João Victor, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Funcionalidades Implementadas

- **Navegação Suave**: Rotas limpas com scroll suave para seções (/ → Início, /#projetos → Projetos, etc.)
- **Header Adaptativo**: Fundo semitransparente com backdrop-blur, sombra ao rolar.
- **Scrollspy**: Link ativo no menu muda conforme a seção em viewport.
- **Hover Dinâmico**: Cor do hover dos links muda conforme a seção atual (temas por seção).
- **Animações Fluidas**: Framer Motion com entrada fade + slide-up, stagger para cards, respeitando prefers-reduced-motion.
- **Temas por Seção**: Accent colors via CSS variables (--accent) para cada seção.
- **Barra de Progresso**: Barra sutil no topo com accent conforme progresso de rolagem.
- **Conteúdo em Português**: Labels e textos traduzidos para pt-BR.
- **Acessibilidade**: Navegação por teclado, semântica, contraste ≥4.5:1, aria-current, prefers-reduced-motion.
- **Performance**: Lazy load de imagens, pré-carregar fontes, animações otimizadas.
- **SEO**: Meta tags, Open Graph, sitemap, robots.txt.

## Tecnologias

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build para Produção

```bash
npm run build
npm start
```

## Melhorias Implementadas

- Scroll suave com compensação do header fixo (scroll-margin-top).
- IntersectionObserver para scrollspy.
- CSS variables para temas dinâmicos.
- Animações com easing personalizado.
- Responsividade e acessibilidade aprimoradas.

## Demonstração

Para ver uma demonstração, execute o projeto e navegue pelas seções. A barra de progresso, hover dinâmico e animações estarão visíveis.