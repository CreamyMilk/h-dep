import type { AppProps } from 'next/app'
import "../styles/globals.css"
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['cyrillic'],weight:'300' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}