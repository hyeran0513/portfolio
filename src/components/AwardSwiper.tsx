import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { awardData } from "../data/award";

const AwardSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SliderWrapper>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {awardData.map((item, i) => (
          <SwiperSlide key={i}>
            <Slide isActive={i === activeIndex}>
              <Institution>{item.institution}</Institution>
              <Title>{item.title}</Title>
              <Date>{item.date}</Date>

              <Description>{item?.description}</Description>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div``;

const Slide = styled.div<{ isActive: boolean }>`
  margin: 2px 0;
  padding: 40px;
  height: 200px;
  border-radius: 60px 20px;
  border: 1px solid ${({ isActive, theme }) => (isActive ? theme.primary : 0)};
  outline: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme.primary}` : "none"};
  transition: border 0.3s ease, outline 0.3s ease;
  background-color: ${({ theme }) => theme.card};
`;

const Institution = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 14px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  line-height: 1.3;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  word-break: keep-all;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.text};
`;

const Description = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px dashed ${({ theme }) => theme.border};
  line-height: 1.3;
  word-break: keep-all;
  color: ${({ theme }) => theme.text};
`;

export default AwardSwiper;
