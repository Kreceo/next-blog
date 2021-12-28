export const theme = {
  colors: {
    // These are called within globalStyles.js in the :root, for using as variables
    document: "#FFFDF9",
    titles: '#333333',
    text: '#000000',
    primaryBtn: '#445973',
    secondaryBtn: '86B7BA',
    white: '#FFFFFF',
    yellow: '#EDDCBB',
    orange: '#E0AF67',
    brown: '#967040'
  },
  fontFamilies: {
    // The google font links are declared in _document.js
    titles: 'Playfair Display, sans-serif',
    text: 'Roboto, sans-serif'
  },
  fontSizes: {
    // Thid will apply to everything that is not a Heading tag
    base: '16px',
    h1: '2.6rem',
    h2: '2.2rem',
    h3: '1.8rem',
    h4: '1.4rem',
    h5: '1rem',
    h6: '0.6rem',
    // Declare here how much rem % to reduce the titles by in mobile
    mobileTitles: '.4rem'
  },
  containers: {
    body: '1200px'
  }
};

export default theme;