import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyles';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <>
      {/* Wrapping the project in the theme options declared in theme.js */}
      <ThemeProvider theme={theme}>
        {/*
          Theme styles are populating the global style variables
          before returning it into the project
        */}
        <GlobalStyle />
        <NavBar />
        {/* This is set within the theme.js file */}
        <div className="container">
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
