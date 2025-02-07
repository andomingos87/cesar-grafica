'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import {
  User,
  Building2,
  Mail,
  Phone,
  Lock,
  Bell,
  Palette,
  Globe,
  CreditCard,
  Printer,
  Save,
} from 'lucide-react'
import { useState } from 'react'

const tabs = [
  { id: 'perfil', label: 'Perfil', icon: User },
  { id: 'empresa', label: 'Empresa', icon: Building2 },
  { id: 'notificacoes', label: 'Notificações', icon: Bell },
  { id: 'aparencia', label: 'Aparência', icon: Palette },
  { id: 'integracao', label: 'Integração', icon: Globe },
  { id: 'pagamento', label: 'Pagamento', icon: CreditCard },
  { id: 'impressao', label: 'Impressão', icon: Printer },
]

function TabButton({ tab, active, onClick }: { tab: typeof tabs[0]; active: boolean; onClick: () => void }) {
  const Icon = tab.icon
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-orange-500 text-white'
          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-text-secondary dark:text-gray-400'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{tab.label}</span>
    </button>
  )
}

function PerfilTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <User className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-text-primary dark:text-white">Foto do Perfil</h3>
          <p className="text-sm text-text-secondary dark:text-gray-400 mb-2">
            Esta foto será exibida em seu perfil e em outras áreas do sistema
          </p>
          <button className="text-sm text-orange-500 hover:text-orange-600">
            Alterar foto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">Nome</label>
          <input
            type="text"
            defaultValue="João Silva"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">Email</label>
          <input
            type="email"
            defaultValue="joao.silva@empresa.com.br"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">Telefone</label>
          <input
            type="tel"
            defaultValue="(11) 98765-4321"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">Cargo</label>
          <input
            type="text"
            defaultValue="Gerente de Vendas"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
      </div>

      <div>
        <h4 className="font-medium text-text-primary dark:text-white mb-4">Alterar Senha</h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">
              Senha Atual
            </label>
            <input
              type="password"
              className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">
              Nova Senha
            </label>
            <input
              type="password"
              className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <Save className="w-4 h-4" />
          <span>Salvar Alterações</span>
        </button>
      </div>
    </div>
  )
}

function EmpresaTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <Building2 className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-text-primary dark:text-white">Logo da Empresa</h3>
          <p className="text-sm text-text-secondary dark:text-gray-400 mb-2">
            Esta logo será exibida em documentos e relatórios
          </p>
          <button className="text-sm text-orange-500 hover:text-orange-600">
            Alterar logo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">
            Razão Social
          </label>
          <input
            type="text"
            defaultValue="Gráfica Express LTDA"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">CNPJ</label>
          <input
            type="text"
            defaultValue="12.345.678/0001-90"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">
            Email Comercial
          </label>
          <input
            type="email"
            defaultValue="contato@graficaexpress.com.br"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">
            Telefone Comercial
          </label>
          <input
            type="tel"
            defaultValue="(11) 3456-7890"
            className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary dark:text-gray-400 mb-1">Endereço</label>
        <input
          type="text"
          defaultValue="Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100"
          className="w-full h-10 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white"
        />
      </div>

      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <Save className="w-4 h-4" />
          <span>Salvar Alterações</span>
        </button>
      </div>
    </div>
  )
}

export default function Configuracoes() {
  const [activeTab, setActiveTab] = useState('perfil')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Configurações</h1>
          <p className="mt-1 text-text-secondary dark:text-gray-400">Gerencie as configurações do sistema</p>
        </div>

        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-2">
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    tab={tab}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              {activeTab === 'perfil' && <PerfilTab />}
              {activeTab === 'empresa' && <EmpresaTab />}
              {/* Implementar outras tabs conforme necessário */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 