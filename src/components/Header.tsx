import styled from "styled-components";
import { BiSun, BiMoon } from "react-icons/bi";
import { menuData } from "../data/menu";
import { useTheme } from "../hooks/useTheme";

interface HeaderProps {
  scrollToTab: (index: number) => void;
}

const Header = ({ scrollToTab }: HeaderProps) => {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>Hyeran's Portfolio</Logo>

        <Nav>
          {menuData.map((item, itemIdx) => (
            <button onClick={() => scrollToTab(itemIdx)}>{item.koTitle}</button>
          ))}

          <ThemeToggleButton onClick={toggleDarkMode}>
            {isDarkMode ? <BiSun /> : <BiMoon />}
          </ThemeToggleButton>
        </Nav>
      </HeaderInner>
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.background};
  z-index: 2000;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
`;

const Logo = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  button {
    border: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

const ThemeToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};

  svg {
    font-size: 18px;
  }
`;

export default Header;
