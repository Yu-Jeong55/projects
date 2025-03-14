// 최근 본 뉴스
import styled from "styled-components";
import LikeNewsCard from "../main/LikeNewsCard";
import { useState, useEffect } from "react";
import { NewsRandomData } from "../../data/newsData";
import { useNavigate } from "react-router-dom";

const MyNewsContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  padding: 15px;
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

export default function MyNews() {
  const [recentNews, setRecentNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // sessionStorage에서 최근 본 뉴스 ID 목록 가져오기
    const recentArticles = JSON.parse(
      sessionStorage.getItem("recentArticles") || "[]"
    );

    // NewsRandomData에서 최근 본 뉴스 데이터 필터링
    const recentNewsData = NewsRandomData.filter((news) =>
      recentArticles.includes(news.article_id)
    );

    setRecentNews(recentNewsData);
  }, []);

  const handleEmptyClick = () => {
    navigate("/news");
  };

  return (
    <>
      <h2>최근 본 뉴스</h2>
      <MyNewsContainer>
        {recentNews.length > 0 ? (
          recentNews.map((newsData, idx) => (
            <LikeNewsCard
              key={`${idx}-${newsData.article_id}`}
              $background={"lightgray"}
              likeData={newsData}
            />
          ))
        ) : (
          <EmptyMessage onClick={handleEmptyClick}>
            최근 본 뉴스가 없습니다
            <br />
            지금 뉴스를 보러 갈까요?
          </EmptyMessage>
        )}
      </MyNewsContainer>
    </>
  );
}
