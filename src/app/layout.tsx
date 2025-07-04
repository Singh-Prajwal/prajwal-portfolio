// src/app/layout.tsx
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers' 
import ActiveSectionContextProvider from '@/context/active-section-context'
import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'] 
})
export const metadata: Metadata = {
  title: 'Prajwal Singh | Full Stack Developer',
  icons:"./image.png",
  description: 'Building robust and scalable applications for the web.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} bg-gray-50 text-gray-900 dark:bg-[#0a0a0c] dark:text-[#ebebeb] transition-colors duration-300`}>
        <Providers>
        <ActiveSectionContextProvider>
        <LeftSidebar />
        <div className="relative md:pl-24">
              <Navbar />
              {children}
              </div>
        </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  )
}