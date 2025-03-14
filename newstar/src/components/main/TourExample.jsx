import styled from 'styled-components';
import Lottie from 'lottie-react';

import MainNewsHeader from './MainNewsHeader';
import MainNewsBody from './MainNewsBody';
import swipeLottie from '../../assets/lottie/swipe.json'

import { useTour } from "@reactour/tour";
import { useEffect } from 'react';

const MainNewsImage = styled.img`
    width: 100%;
    padding: 0px 15px;
    object-fit: certain;
`;


const NewsContainer = styled.div`
    position: relative;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ImageBox = styled.div`
    z-index: 100001;
    position: absolute;
    width: 150px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SliderImage = styled.img`
  width: 150px;
  height: 150px;
`

const LottieStyle = {
  height: '170px',
  width: '170px',
};

function TourExample({ newsData, setIsImageLoad }) {
    const { currentStep } = useTour();

    return (
        <NewsContainer>
            <MainNewsImage src={newsData.image_url} alt="news image" onLoad={() => setIsImageLoad(true)}/>
            {currentStep === 3 && <ImageBox data-tour="slider">
                <Lottie animationData={swipeLottie} style={LottieStyle} />
            </ImageBox>}
            <MainNewsHeader
                newsData={newsData}
            />
            <MainNewsBody newsData={newsData} />
        </NewsContainer>
    );
}

export default TourExample;
