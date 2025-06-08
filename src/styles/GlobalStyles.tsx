import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        background-color: #f5f7fa;
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
