import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { BarChart, DollarSign, Package, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const metrics = [
  {
    label: 'Faturamento Mensal',
    value: 'R$ 125.500,00',
    delta: '+12.3%',
    icon: DollarSign,
  },
  {
    label: 'Pedidos em Aberto',
    value: '23',
    delta: '-5.2%',
    icon: ShoppingCart,
  },
  {
    label: 'Produtos Ativos',
    value: '156',
    delta: '+3.1%',
    icon: Package,
  },
  {
    label: 'Taxa de Conversão',
    value: '32%',
    delta: '+2.4%',
    icon: BarChart,
  },
]

function MetricCard({ metric }: { metric: typeof metrics[0] }) {
  const Icon = metric.icon
  const isDeltaPositive = metric.delta.startsWith('+')

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-secondary dark:text-gray-400">{metric.label}</span>
        <Icon className="w-5 h-5 text-text-muted dark:text-gray-500" />
      </div>
      <div className="mt-4">
        <span className="text-2xl font-semibold text-text-primary dark:text-white">{metric.value}</span>
        <span className={`ml-2 text-sm font-medium ${
          isDeltaPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'
        }`}>
          {metric.delta}
        </span>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Bem-vindo de volta!</h1>
          <p className="mt-1 text-text-secondary dark:text-gray-400">Confira o desempenho do seu negócio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-text-primary dark:text-white mb-4">Pedidos Recentes</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${i}/200/200`}
                      alt="Produto"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-text-primary dark:text-white">Pedido #{1000 + i}</h3>
                    <p className="text-sm text-text-secondary dark:text-gray-400">Cliente {i}</p>
                  </div>
                  <span className="text-sm font-medium text-orange-500">
                    R$ {(Math.random() * 1000).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-text-primary dark:text-white mb-4">Produtos Mais Vendidos</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${i + 10}/200/200`}
                      alt="Produto"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-text-primary dark:text-white">Produto {i}</h3>
                    <p className="text-sm text-text-secondary dark:text-gray-400">{30 - i * 5} vendas este mês</p>
                  </div>
                  <span className="text-sm font-medium text-green-500">
                    +{15 - i * 2}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 