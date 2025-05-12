import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const Header = ({ scrollToTab }: { scrollToTab: (index: number) => void }) => {
  const { toggleDarkMode } = useTheme();

  return (
    <HeaderContainer>
      <Nav>
        <button onClick={() => scrollToTab(0)}>포트폴리오</button>
        <button onClick={toggleDarkMode}>테마 변경</button>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  height: 100%;
`;

export default Header;
