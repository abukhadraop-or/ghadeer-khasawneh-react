import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

*{
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 100%;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure, 
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

`;
export default GlobalStyle;
