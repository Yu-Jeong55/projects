// 메인 숏폼 페이지
// 뉴스 기사 좌우로 스크롤

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useEffect, useState, useRef } from "react";
import { isStartState, newsDataState } from "../state/atoms";
import { NewsRandomData } from "../data/newsData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTour } from "@reactour/tour";
import Logo from "../assets/logo_dark.png";
import Loading from "../components/Loading";
import MainNewsCard from "../components/main/MainNewsCard";
import TourExample from "../components/main/TourExample";

const StyledSlider = styled(Slider)`
  .slick-slide {
    height: 0px !important;
  }
  .slick-slide.slick-active {
    height: 100% !important;
  }
`;

const GuideText = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(138, 192, 56, 0.7);
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1000;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const tourData = {
  article_id: 0,
  bcategory: 100,
  content:
    "바쁜 현대인을 위한 플랫폼인 뉴스타를 출시했습니다. 해당 플랫폼은 개인 맞춤형 뉴스를 추천해주며, 숏폼 형식으로 사용자 경험을 향상시켰습니다.",
  date: "2024-03-27T21:21:01",
  image_url: Logo,
  scategory: 267,
  title: "한손으로 읽는 숏폼 트렌드 짧은 NEWS, 뉴스타",
  url: "https://newstar.world",
};

export default function ShortForm() {
  const [newsDatas, setNewsDatas] = useRecoilState(newsDataState);
  const [isStarted, setIsStarted] = useRecoilState(isStartState);
  const [loading, setLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const [isImageLoad, setIsImageLoad] = useState(false);
  const { setIsOpen, isOpen } = useTour();
  const sliderRef = useRef(null);

  // 초기 데이터 설정
  useEffect(() => {
    setLoading(true);
    setNewsDatas(NewsRandomData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isImageLoad && isStarted && !isOpen) {
      setIsStarted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isImageLoad) {
      setIsOpen(true);
    }
  }, [isImageLoad]);

  // 3초 후 안내 메시지 숨기기
  useEffect(() => {
    if (!isStarted) {
      const timer = setTimeout(() => {
        setShowGuide(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isStarted, showGuide]);

  // 최근 본 뉴스 저장 함수
  const saveRecentArticle = (articleId) => {
    const recentArticles = JSON.parse(
      sessionStorage.getItem("recentArticles") || "[]"
    );

    // 이미 있는 뉴스는 제거하고 새로 추가
    const filteredArticles = recentArticles.filter((id) => id !== articleId);
    filteredArticles.unshift(articleId);

    // 최대 10개까지만 저장
    const limitedArticles = filteredArticles.slice(0, 10);

    sessionStorage.setItem("recentArticles", JSON.stringify(limitedArticles));
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    ref: sliderRef,
    beforeChange: (curr, next) => {
      saveRecentArticle(newsDatas[next].article_id);
    },
  };

  useEffect(() => {
    if (newsDatas.length > 0) {
      const firstNewsData = newsDatas[0];
      saveRecentArticle(firstNewsData.article_id);
    }
  }, [newsDatas]);

  if (loading && !isStarted) {
    return <Loading />;
  }

  return (
    <>
      {isStarted && (
        <TourExample newsData={tourData} setIsImageLoad={setIsImageLoad} />
      )}
      {!isStarted && (
        <>
          <StyledSlider {...sliderSettings}>
            {newsDatas &&
              newsDatas.map((newsData) => (
                <MainNewsCard key={newsData.article_id} newsData={newsData} />
              ))}
          </StyledSlider>
          <GuideText $show={showGuide}>옆으로 넘겨주세요! →</GuideText>
        </>
      )}
    </>
  );
}
