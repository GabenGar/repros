import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  if (!pageProps.locale) {
    throw new Error("No pageprops on the app.")
  }

  return <Component {...pageProps} />
}

export default MyApp
