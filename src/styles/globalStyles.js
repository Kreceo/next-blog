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
    --melon: ${props => props.theme.colors.melon};
    --palePink: ${props => props.theme.colors.palePink};
    --mistyRose: ${props => props.theme.colors.mistyRose};
    --isabelline: ${props => props.theme.colors.isabelline};
    --alabaster: ${props => props.theme.colors.alabaster};
    --linen: ${props => props.theme.colors.linen};
    --champPink: ${props => props.theme.colors.champPink};
    --peach: ${props => props.theme.colors.peach};
    --crayola: ${props => props.theme.colors.crayola};
  }

  // Document default fixes
  body {
    padding: 0;
    margin: 0;
    font-size: calc(${props => props.theme.fontSizes.base} + 0vw);
    font-family: ${props => props.theme.fontFamilies.text};
    background: ${props => props.theme.colors.document};
    line-height: 140%;
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

  p,a,span {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }

  .container { 
    max-width: ${props => props.theme.containers.body};
    margin: auto;
  };
`;
 
export default GlobalStyle;