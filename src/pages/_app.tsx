import '../styles/globals.scss'
import '../components/Layout/index.scss';
import '../components/Sidebar/index.scss'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
