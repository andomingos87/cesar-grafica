'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  UserCircle,
  Package,
  ShoppingCart,
  BarChart2,
  Settings,
  HelpCircle,
  Share2,
  User,
  Users2,
  Sliders,
  MessageSquare
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Clientes', href: '/clientes' },
  { icon: UserCircle, label: 'Vendedores', href: '/vendedores' },
  { icon: Package, label: 'Produtos', href: '/produtos' },
  { icon: ShoppingCart, label: 'Pedidos', href: '/pedidos' },
  { icon: BarChart2, label: 'Relatórios', href: '/relatorios' },
]

const outrosItems = [
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
  { icon: HelpCircle, label: 'Suporte', href: '/suporte' },
  { icon: Share2, label: 'Integrações', href: '/integracoes' },
]

const contaItems = [
  { icon: User, label: 'Conta', href: '/conta' },
  { icon: Users2, label: 'Equipe', href: '/equipe' },
  { icon: Sliders, label: 'Preferências', href: '/preferencias' },
  { icon: MessageSquare, label: 'Feedback', href: '/feedback' },
]

export function Sidebar() {
  const pathname = usePathname()

  const NavItem = ({ icon: Icon, label, href }: { icon: any; label: string; href: string }) => {
    const isActive = pathname === href
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-orange-500 text-white'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-text-primary dark:text-white'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
    )
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-60 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      <div className="flex items-center gap-2 px-3 py-4">
        <div className="w-8 h-8 bg-orange-500 rounded-lg" />
        <span className="font-semibold text-xl text-text-primary dark:text-white">GráficaPRO</span>
      </div>

      <nav className="flex-1 mt-8 space-y-6">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>

        <div>
          <span className="text-xs font-semibold text-text-muted dark:text-gray-400 px-3">OUTROS</span>
          <div className="mt-3 space-y-1">
            {outrosItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-text-muted dark:text-gray-400 px-3">CONTA</span>
          <div className="mt-3 space-y-1">
            {contaItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
} 