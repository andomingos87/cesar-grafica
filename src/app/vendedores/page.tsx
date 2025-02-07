'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Search, Plus, Phone, Mail, User, TrendingUp, Target, DollarSign } from 'lucide-react'
import Image from 'next/image'

const vendedores = [
  {
    id: '1',
    nome: 'Carlos Silva',
    email: 'carlos.silva@graficapro.com.br',
    telefone: '(11) 97890-1234',
    avatar: 'https://picsum.photos/seed/vendedor1/200/200',
    metaMensal: 50000,
    vendasMes: 42500,
    clientesAtivos: 15,
  },
  {
    id: '2',
    nome: 'Ana Paula Santos',
    email: 'ana.santos@graficapro.com.br',
    telefone: '(11) 98765-4321',
    avatar: 'https://picsum.photos/seed/vendedor2/200/200',
    metaMensal: 45000,
    vendasMes: 47800,
    clientesAtivos: 18,
  },
  {
    id: '3',
    nome: 'Roberto Oliveira',
    email: 'roberto.oliveira@graficapro.com.br',
    telefone: '(11) 96543-2109',
    avatar: 'https://picsum.photos/seed/vendedor3/200/200',
    metaMensal: 40000,
    vendasMes: 35200,
    clientesAtivos: 12,
  },
]

function VendedorCard({ vendedor }: { vendedor: typeof vendedores[0] }) {
  const progressoMeta = (vendedor.vendasMes / vendedor.metaMensal) * 100
  const atingiuMeta = progressoMeta >= 100

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <Image
            src={vendedor.avatar}
            alt={vendedor.nome}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-text-primary dark:text-white">{vendedor.nome}</h3>
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <span>{vendedor.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <span>{vendedor.telefone}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 justify-end text-sm font-medium">
            <Target className="w-4 h-4 text-text-muted dark:text-gray-500" />
            <span className="text-text-secondary dark:text-gray-400">Meta Mensal:</span>
            <span className="text-text-primary dark:text-white">
              {vendedor.metaMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2 justify-end text-sm">
              <TrendingUp className="w-4 h-4 text-text-muted dark:text-gray-500" />
              <span className="text-text-secondary dark:text-gray-400">Vendas do Mês:</span>
              <span className={`font-medium ${atingiuMeta ? 'text-green-500 dark:text-green-400' : 'text-orange-500'}`}>
                {vendedor.vendasMes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  atingiuMeta ? 'bg-green-500' : 'bg-orange-500'
                }`}
                style={{ width: `${Math.min(progressoMeta, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Vendedores() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Vendedores</h1>
            <p className="mt-1 text-text-secondary dark:text-gray-400">
              Gerencie sua equipe de vendas e acompanhe o desempenho
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Novo Vendedor</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <span className="text-sm text-text-secondary dark:text-gray-400">Total de Vendas (Mês)</span>
                <div className="text-2xl font-semibold text-text-primary dark:text-white">
                  {vendedores
                    .reduce((total, v) => total + v.vendasMes, 0)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <span className="text-sm text-text-secondary dark:text-gray-400">Meta Global</span>
                <div className="text-2xl font-semibold text-text-primary dark:text-white">
                  {vendedores
                    .reduce((total, v) => total + v.metaMensal, 0)
                    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <User className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <span className="text-sm text-text-secondary dark:text-gray-400">Total de Vendedores</span>
                <div className="text-2xl font-semibold text-text-primary dark:text-white">{vendedores.length}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar vendedores..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white placeholder-text-muted dark:placeholder-gray-500"
            />
          </div>
          <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white">
            <option value="">Ordenar por</option>
            <option value="vendas">Maior Venda</option>
            <option value="meta">% da Meta</option>
            <option value="clientes">Clientes Ativos</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {vendedores.map((vendedor) => (
            <VendedorCard key={vendedor.id} vendedor={vendedor} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 