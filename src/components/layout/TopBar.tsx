'use client'

import { Search, Bell, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function TopBar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    console.log('Tema atual:', theme)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return (
      <div className="h-16 fixed top-0 right-0 left-60 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-8">
        {/* Conteúdo de carregamento */}
      </div>
    )
  }

  return (
    <div className="h-16 fixed top-0 right-0 left-60 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-8">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-text-primary dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          {mounted && theme === 'dark' ? (
            <Sun className="w-5 h-5 text-text-primary dark:text-white" />
          ) : (
            <Moon className="w-5 h-5 text-text-primary dark:text-white" />
          )}
        </button>

        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative">
          <Bell className="w-5 h-5 text-text-primary dark:text-white" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-text-primary dark:text-white">João Silva</span>
            <span className="text-xs text-text-muted dark:text-gray-400">Administrador</span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://picsum.photos/seed/user/200/200"
              alt="Avatar do usuário"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 