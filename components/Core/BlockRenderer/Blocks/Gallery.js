import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import {breakpoint} from "styled-components-breakpoint";

const CarouselWrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;
const CarouselItemContent = styled.div`
  background-size: cover;
  max-height: 20vh;
  ${breakpoint('desktop')`
    min-height: 600px;
    max-height: 60vh;
    height: 40vw;
  `}
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

function Gallery(block) {
  const { attrs } = block;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  console.log(block)
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === attrs.images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? attrs.images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  return (
    <CarouselWrapper>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={5000}
      >
        {/*<CarouselIndicators items={data.slides.edges} activeIndex={activeIndex} onClickHandler={goToIndex} />*/}
        {attrs.images.map(image => {
          return (
            <CarouselItem
              key={image.id}
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
            >
              <CarouselItemContent>
                <Image src={image.url}/>
              </CarouselItemContent>
            </CarouselItem>

          );
        })}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </CarouselWrapper>
  );
}

export default Gallery;