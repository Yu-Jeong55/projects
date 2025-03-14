// 메인 페이지 뉴스 카드
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainNewsHeader from "./MainNewsHeader";
import MainNewsBody from "./MainNewsBody";
import NotFoundImg from "../../assets/logo_dark.png";

const MainNewsImage = styled.img`
  width: 100%;
  height: 300px;
  padding: 15px 15px 0px 15px;
  object-fit: contain;
  margin: 0 auto;
`;

const NewsContainer = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function MainNewsCard({ newsData }) {
  // 좋아요 상태 관리
  const [isLiked, setIsLiked] = useState(() => {
    const likedArticles = JSON.parse(
      sessionStorage.getItem("likedArticles") || "[]"
    );
    return likedArticles.includes(newsData.article_id);
  });

  // 좋아요 상태 업데이트
  function handleLike() {
    setIsLiked((prev) => {
      const newLiked = !prev;
      const likedArticles = JSON.parse(
        sessionStorage.getItem("likedArticles") || "[]"
      );

      if (newLiked) {
        // 좋아요 추가
        if (!likedArticles.includes(newsData.article_id)) {
          likedArticles.push(newsData.article_id);
        }
      } else {
        // 좋아요 제거
        const index = likedArticles.indexOf(newsData.article_id);
        if (index > -1) {
          likedArticles.splice(index, 1);
        }
      }

      sessionStorage.setItem("likedArticles", JSON.stringify(likedArticles));
      return newLiked;
    });
  }

  const onErrorImg = (e) => {
    e.target.src = NotFoundImg;
  };

  return (
    <NewsContainer onDoubleClick={handleLike}>
      <MainNewsImage
        src={newsData.image_url}
        alt="news image"
        onError={onErrorImg}
      />
      <MainNewsHeader
        newsData={newsData}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        handleLikeButtonClick={handleLike}
      />
      <MainNewsBody newsData={newsData} />
    </NewsContainer>
  );
}

export default MainNewsCard;
