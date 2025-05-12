import { useRef } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  const tabRef = useRef<(HTMLElement | null)[]>([]);

  const scrollToTab = (index: number) => {
    tabRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Header scrollToTab={scrollToTab} />

      <main>
        <Outlet context={{ tabRef }} />
      </main>
    </Container>
  );
};

const Container = styled.div`
  padding: 72px 0;
`;

export default MainLayout;
