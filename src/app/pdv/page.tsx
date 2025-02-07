'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import {
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Banknote,
  Barcode,
  Receipt,
  Package,
} from 'lucide-react'
import { useState } from 'react'

// Produtos de exemplo
const produtosDisponiveis = [
  {
    id: '1',
    nome: 'Cartão de Visita 4/4',
    preco: 89.90,
    categoria: 'Cartões',
    imagem: 'https://picsum.photos/seed/cartao1/200/200',
  },
  {
    id: '2',
    nome: 'Banner 440g - 1m²',
    preco: 120.00,
    categoria: 'Banners',
    imagem: 'https://picsum.photos/seed/banner1/200/200',
  },
  {
    id: '3',
    nome: 'Flyer A5 4/4',
    preco: 290.00,
    categoria: 'Folhetos',
    imagem: 'https://picsum.photos/seed/flyer1/200/200',
  },
  {
    id: '4',
    nome: 'Adesivo Vinil - 1m²',
    preco: 75.00,
    categoria: 'Adesivos',
    imagem: 'https://picsum.photos/seed/adesivo1/200/200',
  },
]

interface ItemCarrinho {
  id: string
  nome: string
  preco: number
  quantidade: number
}

function ProdutoCard({ produto, onAdicionar }: { 
  produto: typeof produtosDisponiveis[0]
  onAdicionar: () => void 
}) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors cursor-pointer"
         onClick={onAdicionar}>
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <span className="text-sm font-medium text-text-secondary">{produto.categoria}</span>
        <h3 className="font-medium text-text-primary mt-1">{produto.nome}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-semibold text-orange-500">
            {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <button className="p-2 bg-orange-100 rounded-lg text-orange-500 hover:bg-orange-200 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function ItemCarrinhoCard({ item, onAumentar, onDiminuir, onRemover }: {
  item: ItemCarrinho
  onAumentar: () => void
  onDiminuir: () => void
  onRemover: () => void
}) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1">
        <h4 className="font-medium text-text-primary">{item.nome}</h4>
        <span className="text-sm text-text-secondary">
          {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} un
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onDiminuir}
          className="p-1 rounded-md hover:bg-gray-100 text-text-secondary"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-medium text-text-primary">{item.quantidade}</span>
        <button
          onClick={onAumentar}
          className="p-1 rounded-md hover:bg-gray-100 text-text-secondary"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="w-24 text-right font-medium text-text-primary">
        {(item.preco * item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
      <button
        onClick={onRemover}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

export default function PDV() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [busca, setBusca] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

  const produtosFiltrados = produtosDisponiveis.filter(produto => {
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = !categoriaSelecionada || produto.categoria === categoriaSelecionada
    return matchBusca && matchCategoria
  })

  const adicionarAoCarrinho = (produto: typeof produtosDisponiveis[0]) => {
    setCarrinho(carrinhoAtual => {
      const itemExistente = carrinhoAtual.find(item => item.id === produto.id)
      if (itemExistente) {
        return carrinhoAtual.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      }
      return [...carrinhoAtual, { ...produto, quantidade: 1 }]
    })
  }

  const aumentarQuantidade = (id: string) => {
    setCarrinho(carrinhoAtual =>
      carrinhoAtual.map(item =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    )
  }

  const diminuirQuantidade = (id: string) => {
    setCarrinho(carrinhoAtual =>
      carrinhoAtual.map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    )
  }

  const removerDoCarrinho = (id: string) => {
    setCarrinho(carrinhoAtual => carrinhoAtual.filter(item => item.id !== id))
  }

  const totalCarrinho = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  )

  const categorias = Array.from(
    new Set(produtosDisponiveis.map(p => p.categoria))
  )

  return (
    <DashboardLayout>
      <div className="flex gap-6 h-[calc(100vh-7rem)]">
        {/* Lado esquerdo - Produtos */}
        <div className="flex-1 space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <select
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}
              className="h-12 px-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Todas as categorias</option>
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pb-6" style={{ maxHeight: 'calc(100% - 4rem)' }}>
            {produtosFiltrados.map(produto => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
                onAdicionar={() => adicionarAoCarrinho(produto)}
              />
            ))}
          </div>
        </div>

        {/* Lado direito - Carrinho */}
        <div className="w-96 bg-white rounded-xl border border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 text-lg font-semibold text-text-primary">
              <ShoppingCart className="w-5 h-5" />
              <span>Carrinho</span>
              <span className="ml-auto text-sm text-text-secondary">
                {carrinho.length} {carrinho.length === 1 ? 'item' : 'itens'}
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {carrinho.map(item => (
              <ItemCarrinhoCard
                key={item.id}
                item={item}
                onAumentar={() => aumentarQuantidade(item.id)}
                onDiminuir={() => diminuirQuantidade(item.id)}
                onRemover={() => removerDoCarrinho(item.id)}
              />
            ))}
            {carrinho.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-text-secondary">
                <Package className="w-12 h-12 mb-2" />
                <p>Seu carrinho está vazio</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span className="text-text-primary">Total</span>
                <span className="text-orange-500">
                  {totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button className="flex flex-col items-center gap-1 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <CreditCard className="w-5 h-5 text-text-secondary" />
                  <span className="text-sm text-text-secondary">Cartão</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Banknote className="w-5 h-5 text-text-secondary" />
                  <span className="text-sm text-text-secondary">Dinheiro</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Barcode className="w-5 h-5 text-text-secondary" />
                  <span className="text-sm text-text-secondary">Pix</span>
                </button>
              </div>

              <button className="w-full h-12 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <Receipt className="w-5 h-5" />
                <span>Finalizar Venda</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 