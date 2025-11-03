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
<head>
  <script src="https://assets.adobedtm.com/6a203c8a0ff8/41208599fab8/launch-f7152605ccae-development.min.js" async></script>
  {/* <script src="https://assets.adobedtm.com/e9875dd51dbe/feef1dba7d69/launch-60193ed44ebc-development.min.js" async></script> */}
{/*   <script src="https://assets.adobedtm.com/e9875dd51dbe/43c0a64a4404/launch-f5311ca2f7aa-development.min.js" async></script> */}
{/*   <script src="https://assets.adobedtm.com/6a203c8a0ff8/7269e9617ea1/launch-893050dd949d-development.min.js" async></script> */}
</head>
      
      
      <body className={`${openSans.className} bg-gray-50 text-gray-900 dark:bg-[#0a0a0c] dark:text-[#ebebeb] transition-colors duration-300`}>
         <div id="container-1">Container-1
         </div>
        <div id="target-box-1">target-1</div>
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
