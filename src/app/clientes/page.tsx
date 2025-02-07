'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Search, Plus, Phone, Mail, Building2, User, History } from 'lucide-react'
import Image from 'next/image'

const clientes = [
  {
    id: '1',
    nome: 'Gráfica Express LTDA',
    email: 'contato@graficaexpress.com.br',
    telefone: '(11) 3456-7890',
    cnpj: '12.345.678/0001-90',
    ultimaCompra: '2024-02-01',
    valorTotal: 15750.00,
  },
  {
    id: '2',
    nome: 'Editora Moderna S.A.',
    email: 'comercial@editoramoderna.com.br',
    telefone: '(11) 2345-6789',
    cnpj: '23.456.789/0001-01',
    ultimaCompra: '2024-01-28',
    valorTotal: 23400.00,
  },
  {
    id: '3',
    nome: 'Papelaria Central',
    email: 'vendas@papelariacentral.com.br',
    telefone: '(11) 4567-8901',
    cnpj: '34.567.890/0001-12',
    ultimaCompra: '2024-01-25',
    valorTotal: 8900.00,
  },
]

function ClienteCard({ cliente }: { cliente: typeof clientes[0] }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-colors cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <Building2 className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-text-primary dark:text-white">{cliente.nome}</h3>
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <span>{cliente.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <span>{cliente.telefone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Building2 className="w-4 h-4" />
              <span>{cliente.cnpj}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-text-secondary dark:text-gray-400">Última compra</div>
          <div className="mt-1 font-medium text-text-primary dark:text-white">
            {new Date(cliente.ultimaCompra).toLocaleDateString('pt-BR')}
          </div>
          <div className="mt-2 text-lg font-semibold text-orange-500">
            {cliente.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Clientes() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Clientes</h1>
            <p className="mt-1 text-text-secondary dark:text-gray-400">
              Gerencie seus clientes e acompanhe o histórico de compras
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Novo Cliente</span>
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar clientes..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white placeholder-text-muted dark:placeholder-gray-500"
            />
          </div>
          <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white">
            <option value="">Todos os tipos</option>
            <option value="pessoa_juridica">Pessoa Jurídica</option>
            <option value="pessoa_fisica">Pessoa Física</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {clientes.map((cliente) => (
            <ClienteCard key={cliente.id} cliente={cliente} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 