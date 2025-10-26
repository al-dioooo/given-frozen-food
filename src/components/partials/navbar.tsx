'use client'

import Link from "next/link"
import NavLink from "@/components/nav-link"
import { usePathname } from "next/navigation"
import { Menu, X } from "@/components/icons/outline"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Logo from "@/components/graphics/logo"

export default function Navbar() {
  const pathname = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed top-0 w-full z-10">
        <div className="relative flex items-center justify-between px-6 md:px-24 py-4 bg-white/50s backdrop-blur border-b border-gray-100">
          <div className="text-red-500"><Logo className="w-24 h-auto" /></div>

          <nav className="absolute inset-0 pointer-events-none w-full hidden md:flex items-center justify-center">
            <ul className="flex items-center space-x-8 pointer-events-auto text-sm">
              <li>
                <NavLink href="/" active="/" label="Home" />
              </li>
              <li>
                <NavLink href="/product" active="/product" label="Product" />
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <Link href="/contact" className={`${pathname == '/contact' ? 'bg-linear-to-tl from-red-500 to-red-300 text-white border-red-200' : 'border-gray-200 hover:bg-linear-to-tl hover:from-red-500 hover:to-red-300 hover:text-white hover:border-red-200'} border-2 font-medium rounded-full px-8 py-2 text-sm transition cursor-pointer`}>
              Order Now
            </Link>
          </div>

          <div className="md:hidden flex">
            <button onClick={() => toggleMenu()} className="border border-gray-200 p-2 rounded-lg">
              {isMenuOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* <AnimatePresence initial={false} mode="wait"> */}
        {isMenuOpen && (
          <motion.div className="min-h-screen px-6 pt-32 bg-white flex-col flex space-y-8">
            <ul className="text-4xl space-y-16 flex flex-col items-center">
              <li>
                <NavLink href="/" active="/" label="Home" />
              </li>
              <li>
                <NavLink href="/product" active="/product" label="Product" />
              </li>

              <li>
                <NavLink href="/contact" active="/contact" label="Contact" />
              </li>
            </ul>
          </motion.div>
        )}
      {/* </AnimatePresence> */}
    </>
  )
}
