import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pretendard', sans-serif;
    background-color: ${({ theme }) => theme.background};
    transition: background-color ease 0.3s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    background: 0;
    border: 0;
  }
`;
