import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/app/theme-provider';
import { Header } from '@/components/app/header';
import { Footer } from '@/components/app/footer';

export const metadata: Metadata = {
  title: {
    default: 'HashVerify | Güvenli Kriptografik Hash Aracınız',
    template: '%s | HashVerify',
  },
  description: 'Metinler ve dosyalar için SHA-1, SHA-256, SHA-384, SHA-512 ve bcrypt hash\'leri oluşturun. Dosya bütünlüğünü doğrulayın ve verilerinizi güvence altına alın.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-dvh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
