// 좋아요 한 뉴스

import styled from "styled-components";
import { useState, useEffect } from "react";
import LikeNewsCard from "../main/LikeNewsCard";
import { useNavigate } from "react-router-dom";
import { NewsRandomData } from "../../data/newsData";
import { useInView } from "react-intersection-observer";

const LikeNewsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px;
  display: flex;
  gap: 10px;
  position: relative;
`;

const EmptyMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  transition: background-color 0.2s;
  line-height: 1.3;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export default function LikeNews() {
  const [likeNews, setLikeNews] = useState([]);
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    // sessionStorage에서 좋아요 뉴스 ID 목록 가져오기
    const likedArticles = JSON.parse(
      sessionStorage.getItem("likedArticles") || "[]"
    );

    // NewsRandomData에서 좋아요된 뉴스 데이터 필터링
    const likedNewsData = NewsRandomData.filter((news) =>
      likedArticles.includes(news.article_id)
    );

    setLikeNews(likedNewsData);
  }, [inView]);

  const handleEmptyClick = () => {
    navigate("/news");
  };

  return (
    <>
      <h2>좋아요 한 뉴스</h2>
      <LikeNewsContainer>
        {likeNews.length > 0 ? (
          likeNews.map((likeData, idx) => (
            <LikeNewsCard
              key={`${idx}-${likeData.article_id}`}
              $background={
                idx % 2 === 0 ? "rgb(138, 192, 56)" : "rgb(100, 192, 86)"
              }
              likeData={likeData}
            />
          ))
        ) : (
          <EmptyMessage onClick={handleEmptyClick}>
            좋아요 누른 뉴스가 없습니다
            <br />
            지금 뉴스를 보러 갈까요?
          </EmptyMessage>
        )}
        <div ref={ref} />
      </LikeNewsContainer>
    </>
  );
}
