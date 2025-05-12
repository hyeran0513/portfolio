import styled from "styled-components";
import PortfolioList from "../components/PortfolioList";
import { useOutletContext } from "react-router-dom";

type OutletContextType = {
  tabRef: React.MutableRefObject<(HTMLElement | null)[]>;
};

const Home = () => {
  const { tabRef } = useOutletContext<OutletContextType>();

  return (
    <>
      <section
        ref={(el) => {
          tabRef.current[0] = el;
        }}
      >
        <Content>
          <Title>
            <span>Portfolio</span>포트폴리오
          </Title>

          <SubTitle>
            다양한 프레임워크와 라이브러리를 활용하여
            <br />
            다양한 기능과 디자인을 구현한 포트폴리오입니다.
          </SubTitle>

          <PortfolioList />
        </Content>
      </section>
    </>
  );
};

const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 72px 20px;
`;

const Title = styled.h3`
  line-height: 1.45;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.text};

  span {
    display: block;
    margin-bottom: 8px;
    line-height: 1.21;
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
  }
`;

const SubTitle = styled.p`
  color: #5d6169;
  margin: 21px 0 64px;
  line-height: 1.6;
  font-size: 20px;
`;

export default Home;
