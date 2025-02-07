'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Search, Plus, Grid, List, Package, Tag, AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const produtos = [
  {
    id: '1',
    nome: 'Cartão de Visita Premium',
    descricao: 'Cartão de visita em papel couchê 300g com laminação fosca',
    categoria: 'Cartões',
    preco: 89.90,
    estoque: 1500,
    minimoEstoque: 500,
    imagem: 'https://picsum.photos/seed/produto1/400/400',
  },
  {
    id: '2',
    nome: 'Banner Lona 440g',
    descricao: 'Banner em lona 440g com acabamento em ilhós',
    categoria: 'Banners',
    preco: 129.90,
    estoque: 50,
    minimoEstoque: 20,
    imagem: 'https://picsum.photos/seed/produto2/400/400',
  },
  {
    id: '3',
    nome: 'Flyer A5 4/4',
    descricao: 'Flyer A5 em papel couchê 115g com impressão frente e verso',
    categoria: 'Folhetos',
    preco: 299.90,
    estoque: 2000,
    minimoEstoque: 1000,
    imagem: 'https://picsum.photos/seed/produto3/400/400',
  },
  {
    id: '4',
    nome: 'Adesivo Vinil',
    descricao: 'Adesivo em vinil com recorte eletrônico',
    categoria: 'Adesivos',
    preco: 45.90,
    estoque: 800,
    minimoEstoque: 300,
    imagem: 'https://picsum.photos/seed/produto4/400/400',
  },
]

function ProdutoCard({ produto, view }: { produto: typeof produtos[0]; view: 'grid' | 'list' }) {
  const estoqueAbaixoMinimo = produto.estoque < produto.minimoEstoque

  if (view === 'grid') {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 mb-4">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-secondary dark:text-gray-400">{produto.categoria}</span>
            <span className="text-sm font-medium text-orange-500">
              {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <h3 className="font-semibold text-lg text-text-primary dark:text-white mb-1">{produto.nome}</h3>
          <p className="text-sm text-text-secondary dark:text-gray-400 mb-4">{produto.descricao}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-text-muted dark:text-gray-500" />
              <span className="text-sm text-text-secondary dark:text-gray-400">Estoque: {produto.estoque}</span>
            </div>
            {estoqueAbaixoMinimo && (
              <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs">Baixo estoque</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex gap-4">
        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-text-secondary dark:text-gray-400">{produto.categoria}</span>
            <span className="text-lg font-medium text-orange-500">
              {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <h3 className="font-semibold text-lg text-text-primary dark:text-white mb-1">{produto.nome}</h3>
          <p className="text-sm text-text-secondary dark:text-gray-400">{produto.descricao}</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-text-muted dark:text-gray-500" />
            <span className="text-sm text-text-secondary dark:text-gray-400">Estoque: {produto.estoque}</span>
          </div>
          {estoqueAbaixoMinimo && (
            <div className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-xs">Baixo estoque</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Produtos() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary dark:text-white">Produtos</h1>
            <p className="mt-1 text-text-secondary dark:text-gray-400">Gerencie seu catálogo de produtos e estoque</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Novo Produto</span>
          </button>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white placeholder-text-muted dark:placeholder-gray-500"
            />
          </div>
          <select className="h-10 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white">
            <option value="">Todas as categorias</option>
            <option value="cartoes">Cartões</option>
            <option value="banners">Banners</option>
            <option value="folhetos">Folhetos</option>
            <option value="adesivos">Adesivos</option>
          </select>
          <div className="flex gap-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-orange-500 text-white'
                  : 'text-text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-orange-500 text-white'
                  : 'text-text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'grid grid-cols-1 gap-4'
        }>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} view={viewMode} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 