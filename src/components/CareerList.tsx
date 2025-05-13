import styled from "styled-components";
import CareerItem from "./CareerItem";
import { careerData } from "../data/career";

const CareerList = () => {
  return (
    <CardList>
      {careerData.map((item, index) => (
        <CareerItem item={item} index={index} key={item.id} />
      ))}
    </CardList>
  );
};

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

export default CareerList;
