'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Search, HelpCircle, MessageSquare, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqItems = [
  {
    pergunta: 'Como faço para criar um novo pedido?',
    resposta:
      'Para criar um novo pedido, acesse a página de Pedidos e clique no botão "Novo Pedido". Preencha as informações do cliente, selecione os produtos desejados e confirme o pedido.',
  },
  {
    pergunta: 'Como posso acompanhar o status de produção?',
    resposta:
      'O status de produção pode ser acompanhado na página de Pedidos. Cada pedido exibe seu status atual e você pode clicar nele para ver mais detalhes sobre o andamento da produção.',
  },
  {
    pergunta: 'Como gerar relatórios de vendas?',
    resposta:
      'Acesse a página de Relatórios, selecione o período desejado e o tipo de relatório que deseja gerar. Você pode exportar os relatórios em diferentes formatos.',
  },
  {
    pergunta: 'Como cadastrar novos produtos?',
    resposta:
      'Na página de Produtos, clique em "Novo Produto". Preencha todas as informações necessárias como nome, descrição, preço e categoria. Você também pode adicionar imagens do produto.',
  },
  {
    pergunta: 'Como gerenciar as configurações da empresa?',
    resposta:
      'Acesse a página de Configurações e selecione a aba "Empresa". Lá você pode atualizar informações como razão social, CNPJ, endereço e logo da empresa.',
  },
]

const contatoOpcoes = [
  {
    icon: MessageSquare,
    titulo: 'Chat Online',
    descricao: 'Converse em tempo real com nossa equipe de suporte',
    acao: 'Iniciar Chat',
    disponivel: true,
  },
  {
    icon: Phone,
    titulo: 'Suporte por Telefone',
    descricao: '(11) 3456-7890',
    acao: 'Ligar Agora',
    disponivel: true,
  },
  {
    icon: Mail,
    titulo: 'Email',
    descricao: 'suporte@graficapro.com.br',
    acao: 'Enviar Email',
    disponivel: true,
  },
]

function FAQItem({ item }: { item: typeof faqItems[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-medium text-text-primary">{item.pergunta}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-text-muted" />
        ) : (
          <ChevronDown className="w-5 h-5 text-text-muted" />
        )}
      </button>
      {isOpen && <p className="pb-4 text-text-secondary">{item.resposta}</p>}
    </div>
  )
}

function ContatoCard({ opcao }: { opcao: typeof contatoOpcoes[0] }) {
  const Icon = opcao.icon

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-50 rounded-lg">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-text-primary">{opcao.titulo}</h3>
          <p className="text-text-secondary mt-1">{opcao.descricao}</p>
          <button className="mt-4 text-orange-500 hover:text-orange-600 font-medium">
            {opcao.acao}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Suporte() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFAQ = faqItems.filter(
    (item) =>
      item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.resposta.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Suporte</h1>
          <p className="mt-1 text-text-secondary">
            Encontre ajuda e entre em contato com nossa equipe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contatoOpcoes.map((opcao, index) => (
            <ContatoCard key={index} opcao={opcao} />
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-text-primary">Perguntas Frequentes</h2>
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar nas perguntas frequentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-2">
              {filteredFAQ.map((item, index) => (
                <FAQItem key={index} item={item} />
              ))}
              {filteredFAQ.length === 0 && (
                <div className="text-center py-8">
                  <HelpCircle className="w-12 h-12 text-text-muted mx-auto mb-3" />
                  <p className="text-text-secondary">
                    Nenhuma pergunta encontrada para sua busca
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 