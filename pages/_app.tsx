import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material';
import type { AppContext, AppProps } from 'next/app'
import { lightTheme, customTheme, darkTheme } from '../themes';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}
function App({ Component, pageProps, theme = 'dark' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}



export default App;