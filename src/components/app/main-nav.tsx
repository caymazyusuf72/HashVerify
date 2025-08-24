"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const routes = [
  { href: "/", label: "Araçlar" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "İletişim" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:text-primary",
            pathname === route.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
