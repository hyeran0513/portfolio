import PortfolioItem from "./PortfolioItem";
import styled from "styled-components";
import cloud from "../assets/images/cloud.png";
import commtalk from "../assets/images/commtalk.png";
import hdream from "../assets/images/hdream.png";
import memo from "../assets/images/memo.png";
import saasda from "../assets/images/saasda.png";
import tripsphere from "../assets/images/tripsphere.png";
import { LayoutGroup } from "framer-motion";

const data = [
  {
    id: 1,
    title: "TRIPSPHERE",
    thumb: tripsphere,
    type: "토이 프로젝트",
  },
  {
    id: 2,
    title: "커톡커톡",
    thumb: commtalk,
    type: "토이 프로젝트",
  },
  {
    id: 3,
    title: "TIP 매니저 활동지원 시스템(M.A.P)",
    thumb: memo,
    type: "실무 프로젝트",
  },
  {
    id: 4,
    title: "사스다(SAASDA) 서비스 홈페이지",
    thumb: cloud,
    type: "실무 프로젝트",
  },
  {
    id: 5,
    title: "사스다(SAASDA) 운영 홈페이지",
    thumb: saasda,
    type: "실무 프로젝트",
  },
  {
    id: 6,
    title: "하남시 진로 진학 통합 플랫폼 꿈노트",
    thumb: hdream,
    type: "실무 프로젝트",
  },
];

const PortfolioList = () => {
  return (
    <LayoutGroup>
      <CardList>
        {data?.map((item, index) => (
          <PortfolioItem item={item} index={index} key={item.id} />
        ))}
      </CardList>
    </LayoutGroup>
  );
};

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;
`;

export default PortfolioList;
