'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import {
  CreditCard,
  Truck,
  MessageSquare,
  Mail,
  ShoppingCart,
  FileText,
  Plus,
  Check,
  X,
  ExternalLink,
} from 'lucide-react'

const integracoes = [
  {
    categoria: 'Pagamento',
    servicos: [
      {
        nome: 'PagSeguro',
        descricao: 'Processamento de pagamentos online',
        status: 'conectado',
        icon: CreditCard,
      },
      {
        nome: 'Mercado Pago',
        descricao: 'Soluções de pagamento digital',
        status: 'desconectado',
        icon: CreditCard,
      },
    ],
  },
  {
    categoria: 'Logística',
    servicos: [
      {
        nome: 'Correios',
        descricao: 'Cálculo de frete e rastreamento',
        status: 'conectado',
        icon: Truck,
      },
      {
        nome: 'Transportadora Local',
        descricao: 'Entregas na região metropolitana',
        status: 'conectado',
        icon: Truck,
      },
    ],
  },
  {
    categoria: 'Comunicação',
    servicos: [
      {
        nome: 'WhatsApp Business',
        descricao: 'Comunicação com clientes',
        status: 'conectado',
        icon: MessageSquare,
      },
      {
        nome: 'Mailchimp',
        descricao: 'Marketing por email',
        status: 'desconectado',
        icon: Mail,
      },
    ],
  },
  {
    categoria: 'E-commerce',
    servicos: [
      {
        nome: 'Loja Virtual',
        descricao: 'Integração com e-commerce',
        status: 'conectado',
        icon: ShoppingCart,
      },
      {
        nome: 'Marketplace',
        descricao: 'Vendas em marketplaces',
        status: 'desconectado',
        icon: ShoppingCart,
      },
    ],
  },
  {
    categoria: 'Contabilidade',
    servicos: [
      {
        nome: 'Contador Online',
        descricao: 'Integração contábil',
        status: 'conectado',
        icon: FileText,
      },
    ],
  },
]

function ServicoCard({ servico }: { servico: typeof integracoes[0]['servicos'][0] }) {
  const Icon = servico.icon
  const conectado = servico.status === 'conectado'

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <Icon className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{servico.nome}</h3>
            <p className="text-gray-600 mt-1">{servico.descricao}</p>
          </div>
        </div>
        {conectado ? (
          <div className="flex items-center gap-2 text-green-500">
            <Check className="w-5 h-5" />
            <span className="text-sm font-medium">Conectado</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-gray-400">
            <X className="w-5 h-5" />
            <span className="text-sm font-medium">Desconectado</span>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            conectado
              ? 'text-red-500 hover:bg-red-50'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {conectado ? 'Desconectar' : 'Conectar'}
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <ExternalLink className="w-4 h-4" />
          <span>Configurar</span>
        </button>
      </div>
    </div>
  )
}

export default function Integracoes() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Integrações</h1>
            <p className="mt-1 text-gray-600">
              Gerencie as integrações com serviços externos
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Nova Integração</span>
          </button>
        </div>

        <div className="space-y-8">
          {integracoes.map((categoria, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-4">{categoria.categoria}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {categoria.servicos.map((servico, servicoIndex) => (
                  <ServicoCard key={servicoIndex} servico={servico} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 