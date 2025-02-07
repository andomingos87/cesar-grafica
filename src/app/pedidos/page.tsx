'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Search, Plus, Clock, CheckCircle2, AlertCircle, XCircle, Package } from 'lucide-react'
import { StatusPedido } from '@/types'

const pedidos = [
  {
    id: '1',
    cliente: 'Gráfica Express LTDA',
    produtos: [
      { nome: 'Cartão de Visita Premium', quantidade: 1000, valor: 89.90 },
      { nome: 'Banner Lona 440g', quantidade: 2, valor: 259.80 },
    ],
    status: 'em_producao' as StatusPedido,
    dataCriacao: '2024-02-05T10:30:00',
    previsaoEntrega: '2024-02-08',
    valorTotal: 349.70,
  },
  {
    id: '2',
    cliente: 'Editora Moderna S.A.',
    produtos: [
      { nome: 'Flyer A5 4/4', quantidade: 5000, valor: 1499.50 },
    ],
    status: 'pendente' as StatusPedido,
    dataCriacao: '2024-02-05T14:15:00',
    previsaoEntrega: '2024-02-09',
    valorTotal: 1499.50,
  },
  {
    id: '3',
    cliente: 'Papelaria Central',
    produtos: [
      { nome: 'Adesivo Vinil', quantidade: 100, valor: 459.00 },
    ],
    status: 'concluido' as StatusPedido,
    dataCriacao: '2024-02-04T09:00:00',
    previsaoEntrega: '2024-02-07',
    valorTotal: 459.00,
  },
]

const statusConfig = {
  pendente: {
    icon: Clock,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    label: 'Pendente',
  },
  em_producao: {
    icon: Package,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    label: 'Em Produção',
  },
  concluido: {
    icon: CheckCircle2,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    label: 'Concluído',
  },
  cancelado: {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    label: 'Cancelado',
  },
}

function StatusBadge({ status }: { status: StatusPedido }) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${config.bgColor}`}>
      <Icon className={`w-4 h-4 ${config.color}`} />
      <span className={`text-sm font-medium ${config.color}`}>{config.label}</span>
    </div>
  )
}

function PedidoCard({ pedido }: { pedido: typeof pedidos[0] }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg text-text-primary dark:text-white">Pedido #{pedido.id}</h3>
          <p className="text-sm text-text-secondary dark:text-gray-400">{pedido.cliente}</p>
        </div>
        <StatusBadge status={pedido.status} />
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium text-text-secondary dark:text-gray-400 mb-2">Produtos</div>
          <div className="space-y-2">
            {pedido.produtos.map((produto, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-text-secondary dark:text-gray-400">
                  {produto.quantidade}x {produto.nome}
                </span>
                <span className="font-medium text-text-primary dark:text-white">
                  {produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary dark:text-gray-400">Data do Pedido</span>
            <span className="text-sm text-text-primary dark:text-white">
              {new Date(pedido.dataCriacao).toLocaleDateString('pt-BR')}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary dark:text-gray-400">Previsão de Entrega</span>
            <span className="text-sm text-text-primary dark:text-white">
              {new Date(pedido.previsaoEntrega).toLocaleDateString('pt-BR')}
            </span>
          </div>
          <div className="flex items-center justify-between font-medium">
            <span className="text-text-primary dark:text-white">Total</span>
            <span className="text-lg text-orange-500">
              {pedido.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Pedidos() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Pedidos</h1>
            <p className="mt-1 text-text-secondary dark:text-gray-400">
              Gerencie os pedidos e acompanhe o status de produção
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Novo Pedido</span>
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar pedidos..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white placeholder-text-muted dark:placeholder-gray-500"
            />
          </div>
          <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white">
            <option value="">Todos os status</option>
            <option value="pendente">Pendente</option>
            <option value="em_producao">Em Produção</option>
            <option value="concluido">Concluído</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {pedidos.map((pedido) => (
            <PedidoCard key={pedido.id} pedido={pedido} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 