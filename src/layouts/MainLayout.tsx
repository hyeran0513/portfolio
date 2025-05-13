import { useRef } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";

const MainLayout = () => {
  const tabRef = useRef<(HTMLElement | null)[]>([]);

  const scrollToTab = (index: number) => {
    const target = tabRef.current[index];
    if (target) {
      const offset = 72;
      const top = target.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Header scrollToTab={scrollToTab} />

      <Main>
        <Outlet context={{ tabRef }} />
      </Main>

      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 72px;
`;

const Main = styled.main`
  flex: 1;
`;

export default MainLayout;
