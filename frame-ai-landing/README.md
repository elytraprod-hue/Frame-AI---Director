# FRAME.AI — Agência Inteligente para Filmmakers

Uma landing page cinematográfica moderna construída com **React 19**, **Tailwind CSS 4** e **Framer Motion**, apresentando ferramentas IA para profissionais de vídeo.

## 🎬 Visão Geral

FRAME.AI é uma plataforma que oferece seis ferramentas principais para filmmakers:

1. **Gerador de Roteiro** — Crie roteiros formatados em padrão ABNT/Hollywood
2. **Callsheet Inteligente** — Organize equipe, horários e locações
3. **Decupagem Técnica** — Planeje planos de câmera e movimentos
4. **Orçamento Automático** — Monte orçamentos realistas com diárias de mercado
5. **Proposta Comercial** — Gere propostas elegantes para clientes
6. **Relatório de Produção** — Compile dados em relatório executivo

## 🏗️ Arquitetura

### Stack Tecnológico

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 19 + TypeScript |
| Styling | Tailwind CSS 4 + CSS Variables |
| Animações | Framer Motion |
| Roteamento | Wouter |
| UI Components | shadcn/ui + Radix UI |
| Build | Vite |

### Estrutura de Diretórios

```
frame-ai-landing/
├── client/
│   ├── public/              # Favicon, robots.txt
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ToolsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── CustomCursor.tsx
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Design tokens globais
│   └── index.html           # Template HTML
├── shared/
│   └── const.ts             # Dados estruturados
├── BEST_PRACTICES.md        # Documentação de boas práticas
└── README.md                # Este arquivo
```

## 🎨 Design System

### Tipografia

A hierarquia tipográfica utiliza três famílias de fontes para máxima clareza:

- **Bebas Neue**: Títulos e números (display, bold)
- **DM Sans**: Corpo e descrições (body, light/regular)
- **JetBrains Mono**: Labels técnicos e tags (monospace)

### Paleta de Cores

O design cinematográfico utiliza uma paleta de alto contraste:

| Cor | Valor | Uso |
|-----|-------|-----|
| Black | #080808 | Fundo principal |
| White | #f5f0e8 | Texto principal |
| Orange | #ff4d00 | Destaque, CTA, hover |
| Gray | #1a1a1a, #2e2e2e, #888 | Secundário, borders |

### Componentes

Todos os componentes seguem o design system com espaçamento consistente, transições suaves e efeitos hover bem definidos. Os cards utilizam gradientes sutis e borders para profundidade.

## 🚀 Desenvolvimento

### Setup Inicial

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

### Adicionar Novas Seções

1. **Adicionar dados em `shared/const.ts`**:
   ```typescript
   export const NEW_SECTION = {
     title: "...",
     items: [...]
   };
   ```

2. **Criar componente em `client/src/components/`**:
   ```typescript
   import { NEW_SECTION } from "@/../../shared/const";
   
   export default function NewSection() {
     return (
       <section className="...">
         {/* Conteúdo */}
       </section>
     );
   }
   ```

3. **Importar em `client/src/pages/Home.tsx`**:
   ```typescript
   import NewSection from "@/components/NewSection";
   
   export default function Home() {
     return (
       <div>
         {/* ... */}
         <NewSection />
       </div>
     );
   }
   ```

### Modificar Design Tokens

Todos os tokens estão em `client/src/index.css` na seção `:root`. Modificar qualquer valor afeta toda a aplicação automaticamente.

## ♿ Acessibilidade

O projeto implementa as recomendações WCAG 2.1 AA:

- Contraste adequado entre texto e fundo (4.5:1 mínimo)
- Focus rings visuais para navegação por teclado
- Semantic HTML com tags apropriadas
- Descrições em atributos `aria-label` quando necessário
- Suporte a navegação por teclado em todos os elementos interativos

## 📱 Responsividade

O design é mobile-first com breakpoints em 768px (tablet) e 1024px (desktop). Todos os componentes se adaptam automaticamente a diferentes tamanhos de tela.

## ⚡ Performance

- **Lazy loading**: Animações ativadas apenas quando visíveis
- **Code splitting**: Componentes separados reduzem bundle size
- **CSS purging**: Tailwind remove CSS não utilizado automaticamente
- **Smooth scrolling**: Comportamento nativo do navegador

## 🔍 SEO

O projeto inclui meta tags essenciais em `client/index.html`. Para melhorias futuras:

- Adicionar Open Graph tags
- Implementar schema.org markup
- Criar sitemap.xml
- Configurar robots.txt

## 📚 Documentação Adicional

Consulte `BEST_PRACTICES.md` para detalhes sobre:

- Padrões de código implementados
- Decisões de design
- Próximos passos sugeridos
- Checklist de qualidade

## 🤝 Contribuindo

Ao adicionar novas funcionalidades:

1. Manter a estrutura de componentes
2. Seguir o design system existente
3. Adicionar comentários descritivos
4. Testar responsividade em múltiplos devices
5. Validar acessibilidade

## 📄 Licença

© 2025 FRAME.AI — Todos os direitos reservados.

Feito por filmmakers, para filmmakers.
