import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from '../ui/button';
import { MainNav } from './main-nav';

export function Header() {
  return (
    <header className="bg-background/80 border-b border-border/50 shadow-sm backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    <ShieldCheck className="h-8 w-8" />
                </div>
                <h1 className="text-3xl font-bold font-headline tracking-tight">
                    HashVerify
                </h1>
            </Link>
            <div className="flex items-center gap-4">
              <MainNav />
              <ThemeToggle />
            </div>
        </div>
      </div>
    </header>
  );
}
