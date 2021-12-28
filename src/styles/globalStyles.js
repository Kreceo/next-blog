import { createGlobalStyle } from 'styled-components';
import breakpoint from './breakpoints';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  // Root styling
  :root {
    --document-color: ${props => props.theme.colors.document};
    --title-color: ${props => props.theme.colors.titles};
    --text-color: ${props => props.theme.colors.text};
    --primary-btn: ${props => props.theme.colors.primaryBtn};
    --secondary-btn: ${props => props.theme.colors.secondaryBtn};
    --white: ${props => props.theme.colors.white};
    --yellow: ${props => props.theme.colors.yellow};
    --orange: ${props => props.theme.colors.orange};
    --brown: ${props => props.theme.colors.brown};
  }

  // Document default fixes
  body {
    padding: 0;
    margin: 0;
    font-size: calc(${props => props.theme.fontSizes.base} + 0vw);
    font-family: ${props => props.theme.fontFamilies.text};
    background: ${props => props.theme.colors.document}
  }

  // Typography sizing
  h1 { font-size: calc(${props => props.theme.fontSizes.h1} - ${props => props.theme.fontSizes.mobileTitles}) }
  h2 { font-size: calc(${props => props.theme.fontSizes.h3} - ${props => props.theme.fontSizes.mobileTitles}) }
  h3 { font-size: calc(${props => props.theme.fontSizes.h3} - ${props => props.theme.fontSizes.mobileTitles}) }
  h4 { font-size: calc(${props => props.theme.fontSizes.h3} - ${props => props.theme.fontSizes.mobileTitles}) } 
  h5 { font-size: calc(${props => props.theme.fontSizes.h3} - ${props => props.theme.fontSizes.mobileTitles}) }
  h6 { font-size: calc(${props => props.theme.fontSizes.h3} - ${props => props.theme.fontSizes.mobileTitles}) }

  // Font sizes from 768px upwards
  @media only screen and ${breakpoint.device.sm} {
    h1 { font-size: ${props => props.theme.fontSizes.h1} }
    h2 { font-size: ${props => props.theme.fontSizes.h2} }
    h3 { font-size: ${props => props.theme.fontSizes.h3} }
    h4 { font-size: ${props => props.theme.fontSizes.h4} }
    h5 { font-size: ${props => props.theme.fontSizes.h5} }
    h6 { font-size: ${props => props.theme.fontSizes.h6} }
  }

  // Typography fonts
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamilies.titles};
    color: ${props => props.theme.colors.titles};
  }

  .container { 
    max-width: ${props => props.theme.containers.body};
    margin: auto;
  };
`;
 
export default GlobalStyle;