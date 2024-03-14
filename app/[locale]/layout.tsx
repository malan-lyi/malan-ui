import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { PropsWithChildren } from 'react'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { Link, locales } from '@/navigation'
import Footer from '@ui/organisms/footer'
import Header from '@ui/organisms/header'
import { ThemeContextProvider } from '@ui/organisms/themeLayout'

type Props = PropsWithChildren & { params: { locale: string } }

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale })

  return {
    title: t('title'),
    description: 'Generated by create next app'
  }
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  return <ThemeContextProvider>
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
    <body className="w-full h-full bg-stone-50 text-black dark:bg-stone-950 dark:text-white">
    <Header/>
    <main className="container grid grid-cols-[max-content,1fr] divide-x-[1px] divide-stone-200 dark:divide-stone-800">
      <nav className="w-60 [&_ul]:mx-4 [&_ul]:mb-4 [&_p]:px-4 [&_p]:py-2.5 [&_p]:font-medium">
        <p>Theme</p>
        <ul>
          <li><Link href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Colors</Link></li>
        </ul>
        <p>Components</p>
        <ul>
          <li><Link href="/component/button">Button</Link></li>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </main>
    <Footer/>
    </body>
    </html>
  </ThemeContextProvider>
}