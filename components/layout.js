import { ThemeProvider } from "styled-components";
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyles';
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      {/* Wrapping the project in the theme options declared in theme.js */}
      <ThemeProvider theme={theme}>
        {/* Theme styles are populating the global style variables before returning it into the project */}
        <GlobalStyle />
        <Navbar />
      
        {/* This is set within the theme.js file */}
        <div class="container">
          {children}
        </div>

        <Footer />
      </ThemeProvider>
    </>
  )
}