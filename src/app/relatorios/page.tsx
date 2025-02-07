'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Download, Calendar, TrendingUp, DollarSign, Users, Package, Filter } from 'lucide-react'

const metricas = [
  {
    label: 'Faturamento Total',
    valor: 'R$ 256.890,00',
    crescimento: '+12.3%',
    icon: DollarSign,
    cor: 'orange',
  },
  {
    label: 'Novos Clientes',
    valor: '45',
    crescimento: '+8.1%',
    icon: Users,
    cor: 'blue',
  },
  {
    label: 'Pedidos Finalizados',
    valor: '189',
    crescimento: '+15.4%',
    icon: Package,
    cor: 'green',
  },
  {
    label: 'Ticket Médio',
    valor: 'R$ 1.359,20',
    crescimento: '+5.7%',
    icon: TrendingUp,
    cor: 'purple',
  },
]

const vendas = [
  { mes: 'Jan', valor: 156000 },
  { mes: 'Fev', valor: 165000 },
  { mes: 'Mar', valor: 180000 },
  { mes: 'Abr', valor: 178000 },
  { mes: 'Mai', valor: 195000 },
  { mes: 'Jun', valor: 210000 },
  { mes: 'Jul', valor: 215000 },
  { mes: 'Ago', valor: 230000 },
  { mes: 'Set', valor: 235000 },
  { mes: 'Out', valor: 245000 },
  { mes: 'Nov', valor: 250000 },
  { mes: 'Dez', valor: 256890 },
]

function MetricaCard({ metrica }: { metrica: typeof metricas[0] }) {
  const Icon = metrica.icon
  const cores = {
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-500',
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-500',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-500',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-500',
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${cores[metrica.cor as keyof typeof cores]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <span className="text-sm text-text-secondary dark:text-gray-400">{metrica.label}</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-text-primary dark:text-white">{metrica.valor}</span>
            <span className="text-sm font-medium text-green-500 dark:text-green-400">{metrica.crescimento}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function GraficoVendas() {
  const maxValor = Math.max(...vendas.map(v => v.valor))
  const escala = 200 / maxValor // Altura máxima da barra em pixels

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-lg text-text-primary dark:text-white">Vendas Mensais</h3>
          <p className="text-sm text-text-secondary dark:text-gray-400">Evolução do faturamento no último ano</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filtrar</span>
        </button>
      </div>

      <div className="relative h-[250px]">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {vendas.map((venda, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-orange-500 dark:bg-orange-400 rounded-t-sm transition-all duration-300 hover:bg-orange-600 dark:hover:bg-orange-500"
                style={{ height: `${venda.valor * escala}px` }}
              />
              <span className="text-xs text-text-secondary dark:text-gray-400">{venda.mes}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TabelaVendas() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg text-text-primary dark:text-white">Relatório Detalhado</h3>
            <p className="text-sm text-text-secondary dark:text-gray-400">Análise mensal de vendas e faturamento</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-6 text-sm font-medium text-text-secondary dark:text-gray-400">Período</th>
              <th className="text-right py-3 px-6 text-sm font-medium text-text-secondary dark:text-gray-400">Faturamento</th>
              <th className="text-right py-3 px-6 text-sm font-medium text-text-secondary dark:text-gray-400">Pedidos</th>
              <th className="text-right py-3 px-6 text-sm font-medium text-text-secondary dark:text-gray-400">Ticket Médio</th>
              <th className="text-right py-3 px-6 text-sm font-medium text-text-secondary dark:text-gray-400">Crescimento</th>
            </tr>
          </thead>
          <tbody>
            {vendas.slice(-5).map((venda, index) => (
              <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3 px-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-text-muted dark:text-gray-500" />
                    <span className="text-text-primary dark:text-white">{venda.mes}/2024</span>
                  </div>
                </td>
                <td className="text-right py-3 px-6 font-medium text-text-primary dark:text-white">
                  {venda.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
                <td className="text-right py-3 px-6 text-text-primary dark:text-white">{Math.floor(venda.valor / 1500)}</td>
                <td className="text-right py-3 px-6 text-text-primary dark:text-white">
                  {(venda.valor / Math.floor(venda.valor / 1500)).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td className="text-right py-3 px-6">
                  <span className="text-green-500 dark:text-green-400">+{(Math.random() * 10).toFixed(1)}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Relatorios() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Relatórios</h1>
          <p className="mt-1 text-text-secondary dark:text-gray-400">Análise detalhada do desempenho do negócio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricas.map((metrica, index) => (
            <MetricaCard key={index} metrica={metrica} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          <GraficoVendas />
          <TabelaVendas />
        </div>
      </div>
    </DashboardLayout>
  )
} 