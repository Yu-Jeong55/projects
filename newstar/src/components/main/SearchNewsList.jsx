// 검색 시 나오는 뉴스 리스트
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// styled-components
const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  cursor: pointer;
  // border-bottom: 1px solid #ccc;
  height: 75px;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  min-height: calc(100vh - 190px);
`;

const SearchNewsCardImage = styled.img`
  width: 30%;
  height: 65px;
  border-radius: 2px;
`;

const SearchTitle = styled.div`
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SearchNewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 80px;
`;

const SearchNewsList = ({ NewsData }) => {
  const navigate = useNavigate();

  const handleNewsClick = (articleId) => {
    navigate(`/newstar/${articleId}`);
  };

  return (
    <SearchNewsCardContainer>
      {NewsData.length > 0 ? (
        NewsData.map((newsItem) => (
          <div key={newsItem.article_id}>
            <BoxContainer onClick={() => handleNewsClick(newsItem.article_id)}>
              <SearchNewsCardImage src={newsItem.image_url} alt="news image" />
              <SearchTitle>{newsItem.title}</SearchTitle>
            </BoxContainer>
            <br />
            <hr color="lightgray" border-width="1px" />
          </div>
        ))
      ) : (
        <EmptyContainer>찾으시는 기사가 없습니다 😅</EmptyContainer>
      )}
    </SearchNewsCardContainer>
  );
};

export default SearchNewsList;
