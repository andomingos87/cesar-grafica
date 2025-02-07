# GráficaPRO - Sistema de Gestão para Indústria Gráfica

Sistema completo de gestão desenvolvido especificamente para indústrias gráficas, oferecendo controle total sobre pedidos, clientes, produtos e relatórios, com uma interface moderna e responsiva.

## 🚀 Funcionalidades Principais

- **Dashboard Interativo**
  - Métricas em tempo real
  - Gráficos de desempenho
  - Visão geral do negócio

- **Gestão de Clientes**
  - Cadastro completo de clientes
  - Histórico de compras
  - Segmentação por tipo (PJ/PF)

- **Gestão de Vendedores**
  - Controle de metas
  - Acompanhamento de desempenho
  - Histórico de vendas

- **Controle de Produtos**
  - Catálogo digital
  - Gestão de estoque
  - Alertas de estoque baixo
  - Múltiplas categorias

- **Gerenciamento de Pedidos**
  - Fluxo completo de pedidos
  - Status de produção
  - Histórico de transações
  - Previsão de entrega

- **Relatórios Detalhados**
  - Análise de vendas
  - Desempenho financeiro
  - Relatórios customizáveis
  - Exportação de dados

- **PDV (Ponto de Venda)**
  - Interface intuitiva
  - Múltiplas formas de pagamento
  - Carrinho de compras
  - Busca rápida de produtos

- **Configurações Avançadas**
  - Perfil da empresa
  - Preferências do sistema
  - Integrações
  - Suporte técnico

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**
  - App Router
  - Server Components
  - Client Components
  - API Routes

- **TypeScript**
  - Tipagem estática
  - Interfaces
  - Type safety

- **Tailwind CSS**
  - Design responsivo
  - Dark mode
  - Customização de temas
  - Componentes estilizados

- **Lucide React**
  - Ícones modernos
  - Consistência visual
  - Fácil implementação

## 🎨 Design System

### Cores
- **Primary**: `#FF5722` (Orange)
- **Secondary**: `#F8F9FA` (Light Gray)
- **Text Primary**: `#1A1A1A`
- **Text Secondary**: `#4B5563`
- **Background**: 
  - Light: `#FFFFFF`
  - Dark: `#111827`

### Breakpoints
- **sm**: `576px`
- **md**: `768px`
- **lg**: `992px`
- **xl**: `1200px`

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas
│   ├── dashboard/         # Dashboard principal
│   ├── clientes/         # Gestão de clientes
│   ├── vendedores/       # Gestão de vendedores
│   ├── produtos/         # Catálogo de produtos
│   ├── pedidos/          # Gerenciamento de pedidos
│   ├── relatorios/       # Relatórios e análises
│   ├── configuracoes/    # Configurações do sistema
│   └── pdv/             # Ponto de venda
├── components/
│   ├── layout/          # Componentes de layout
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   └── DashboardLayout.tsx
│   ├── features/        # Componentes específicos
│   └── shared/          # Componentes compartilhados
├── types/               # Definições de tipos
└── utils/              # Funções utilitárias
```

## 🚀 Como Iniciar

1. Clone o repositório
```bash
git clone https://seu-repositorio/graficapro.git
cd graficapro
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

5. Acesse `http://localhost:3000`

## 🌙 Dark Mode

O sistema possui suporte nativo a dark mode, com temas claros e escuros que podem ser alternados pelo usuário. A implementação utiliza:

- `next-themes` para gerenciamento de temas
- Classes Tailwind para estilização
- Persistência da preferência do usuário
- Transições suaves entre temas

## 📱 Responsividade

O sistema é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- Layout fluido
- Menu lateral colapsável
- Componentes adaptáveis
- Experiência mobile-first

## 🔒 Segurança

- Autenticação de usuários
- Controle de permissões
- Proteção de rotas
- Validação de dados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 💚 pela equipe GráficaPRO
