import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app'
import { customTheme, darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
