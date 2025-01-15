import type { Metadata } from 'next'
import { Cabin, Playwrite_VN } from 'next/font/google'
import '@mantine/core/styles.css'
import './globals.css'
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core'
import { theme } from '@/themes'

const headingMono = Playwrite_VN({
  variable: '--font-heading-sans',
  weight: ['400'],
})

const fontSans = Cabin({
  variable: '--font-sans',
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Tarot',
  description: 'Maay Tarot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${headingMono.variable} ${fontSans.variable} antialiased`}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
