import PortfolioItem from "./PortfolioItem";
import styled from "styled-components";
import { LayoutGroup } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const PortfolioList = () => {
  return (
    <LayoutGroup>
      <CardList>
        {portfolioData.map((item, index) => (
          <PortfolioItem item={item} index={index} key={item.id} />
        ))}
      </CardList>
    </LayoutGroup>
  );
};

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

export default PortfolioList;
