export type StatusPedido = 'pendente' | 'em_producao' | 'concluido' | 'cancelado'

export interface Pedido {
  id: string
  clienteId: string
  produtos: Array<{
    produtoId: string
    quantidade: number
    precoUnitario: number
  }>
  statusAtual: StatusPedido
  dataCriacao: string
  dataAtualizacao: string
  valorTotal: number
}

export interface Cliente {
  id: string
  nome: string
  email: string
  telefone: string
  cnpj?: string
  cpf?: string
}

export interface Compra {
  id: string
  pedidoId: string
  clienteId: string
  data: string
  valor: number
}

export interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  categoria: string
  imagem?: string
}

export interface Estoque {
  produtoId: string
  quantidade: number
  minimo: number
  maximo: number
}

export interface Notificacao {
  id: string
  tipo: 'pedido' | 'estoque' | 'sistema'
  mensagem: string
  data: string
  lida: boolean
}

export interface AppState {
  pedidos: {
    statusAtual: StatusPedido
    listaPedidos: Pedido[]
    notificacoes: Notificacao[]
  }
  clientes: {
    listaClientes: Cliente[]
    historicoCompras: Compra[]
  }
  produtos: {
    catalogo: Produto[]
    estoque: Estoque[]
  }
} 