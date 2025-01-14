import type { Metadata } from 'next'
import { Major_Mono_Display, Montserrat_Alternates } from 'next/font/google'
import '@mantine/core/styles.css'
import './globals.css'
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core'
import { theme } from '@/themes'

const headingMono = Major_Mono_Display({
  variable: '--font-heading-sans',
  subsets: ['latin'],
  weight: ['400'],
})

const fontSans = Montserrat_Alternates({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
