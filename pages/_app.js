import '@/styles/globals.css'
import { Reenie_Beanie } from '@next/font/google'

const reenie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={reenie.className}>
      <Component {...pageProps} />
    </main>
  )
}
