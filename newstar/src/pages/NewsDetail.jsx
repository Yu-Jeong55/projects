// 메인 페이지 뉴스 카드
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NewsRandomData } from "../data/newsData";

import MainNewsHeader from "../components/main/MainNewsHeader";
import MainNewsBody from "../components/main/MainNewsBody";
import NotfoundImg from "../assets/logo_dark.png";

const DetailNewsImage = styled.img`
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 20px;
  object-fit: contain;
`;

const DetailNewsContainer = styled.div`
  overflow-y: auto;
  width: 100%;
`;

function NewsDetailCard() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

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

  useEffect(() => {
    const foundArticle = NewsRandomData.find(
      (news) => news.article_id === parseInt(params.articleId)
    );
    setArticle(foundArticle);
    if (foundArticle) {
      saveRecentArticle(foundArticle.article_id);

      // 좋아요 상태 초기화
      const likedArticles = JSON.parse(
        sessionStorage.getItem("likedArticles") || "[]"
      );
      setIsLiked(likedArticles.includes(foundArticle.article_id));
    }
  }, [params.articleId]);

  // 좋아요 상태 업데이트
  function handleLike() {
    if (!article) return;

    setIsLiked((prev) => {
      const newLiked = !prev;
      const likedArticles = JSON.parse(
        sessionStorage.getItem("likedArticles") || "[]"
      );

      if (newLiked) {
        // 좋아요 추가
        if (!likedArticles.includes(article.article_id)) {
          likedArticles.push(article.article_id);
        }
      } else {
        // 좋아요 제거
        const index = likedArticles.indexOf(article.article_id);
        if (index > -1) {
          likedArticles.splice(index, 1);
        }
      }

      sessionStorage.setItem("likedArticles", JSON.stringify(likedArticles));
      return newLiked;
    });
  }

  const onErrorImg = (e) => {
    e.target.src = NotfoundImg;
  };

  if (!article) {
    return <div>뉴스를 찾을 수 없습니다.</div>;
  }

  return (
    <DetailNewsContainer onDoubleClick={handleLike}>
      <DetailNewsImage
        src={article.image_url}
        alt="news_image"
        onError={onErrorImg}
      />
      <MainNewsHeader
        newsData={article}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        handleLikeButtonClick={handleLike}
      />
      <MainNewsBody newsData={article} />
    </DetailNewsContainer>
  );
}

export default NewsDetailCard;
