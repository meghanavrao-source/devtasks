import { css, Global, useTheme } from "@emotion/react";
import { FC } from "react";

const GlobalStyles: FC = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          height: 100%;
          font-family: "Inter", sans-serif;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          transition: background-color 0.3s, color 0.3s;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          cursor: pointer;
          font: inherit;
          background: none;
          border: none;
        }

        img {
          max-width: 100%;
          display: block;
        }
      `}
    />
  );
};

export default GlobalStyles;
