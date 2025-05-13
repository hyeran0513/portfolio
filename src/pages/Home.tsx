import styled, { useTheme } from "styled-components";
import PortfolioList from "../components/PortfolioList";
import { useOutletContext } from "react-router-dom";
import AwardSwiper from "../components/AwardSwiper";
import Introduce from "../components/Introduce";
import CareerList from "../components/CareerList";
import SectionTitle from "../components/SectionTitle";
import type { RefObject } from "react";
import { backendData, frontendData, toolData } from "../data/skill";
import SkillCategory from "../components/SkillCategory";
import { menuData } from "../data/menu";

type OutletContextType = {
  tabRef: RefObject<(HTMLElement | null)[]>;
};

const Home = () => {
  const { tabRef } = useOutletContext<OutletContextType>();
  const theme = useTheme();

  return (
    <>
      {/* 개요 */}
      <Section
        ref={(el) => {
          tabRef.current[0] = el;
        }}
      >
        <Introduce />
      </Section>

      {/* 보유 스킬 */}
      <Section
        ref={(el) => {
          tabRef.current[1] = el;
        }}
      >
        <Content>
          <SectionTitle
            egTitle={menuData[1].egTitle}
            koTitle={menuData[1].koTitle}
          ></SectionTitle>

          <SkillWrapper>
            <SkillCategory title="Frontend" data={frontendData} />
            <SkillCategory title="Tool" data={toolData} />
            <SkillCategory title="Backend" data={backendData} />
          </SkillWrapper>

          <SkillDescription>
            실무 경험과 부트캠프 교육 이수를 완료한, 컴퓨터학과 전공 개발자
          </SkillDescription>
        </Content>
      </Section>

      {/* 경력 및 교육 이수 */}
      <Section
        ref={(el) => {
          tabRef.current[2] = el;
        }}
      >
        <Content>
          <SectionTitle
            egTitle={menuData[2].egTitle}
            koTitle={menuData[2].koTitle}
          ></SectionTitle>

          <CareerList />
        </Content>
      </Section>

      {/* 수상 및 자격증 */}
      <Section
        ref={(el) => {
          tabRef.current[3] = el;
        }}
        bgColor={theme.sectionAwardBg}
      >
        <Content>
          <SectionTitle
            egTitle={menuData[3].egTitle}
            koTitle={menuData[3].koTitle}
          ></SectionTitle>

          <AwardSwiper />
        </Content>
      </Section>

      {/* 포트폴리오 */}
      <Section
        ref={(el) => {
          tabRef.current[4] = el;
        }}
      >
        <Content>
          <SectionTitle
            egTitle={menuData[4].egTitle}
            koTitle={menuData[4].koTitle}
          >
            {menuData[4].description}
          </SectionTitle>

          <PortfolioList />
        </Content>
      </Section>
    </>
  );
};

const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const Section = styled.section<{ bgColor?: string }>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.background};
`;

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const SkillDescription = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme.yellow};
  text-align: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.brown};
  font-weight: bold;
`;

export default Home;
