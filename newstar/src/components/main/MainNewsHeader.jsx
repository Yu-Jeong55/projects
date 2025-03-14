import { Link } from "react-router-dom";
import styled from "styled-components";

import Tag from "../../common/Tag";
import LikeButton from "../../common/Like";

import { BigCategory, SmallCategory } from "../../state/categoryData";
const MainNewsHeaderContainer = styled.div`
  padding: 20px;
`;

const NewsTagAndLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewsTags = styled.div`
  display: flex;
  gap: 7px;
`;

const LikeBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

// 뉴스 헤더 (제목, 날짜, 태그)
export default function NewsHeader({
  newsData,
  isLiked,
  handleLikeButtonClick,
}) {
  const newsDate = newsData.date?.replace("T", "\n");
  return (
    <MainNewsHeaderContainer>
      <NewsTagAndLike>
        <NewsTags data-tour="tag">
          <Link to={`/news/category/${newsData.bcategory}`}>
            <Tag fontSize={"12px"}>{`# ${
              BigCategory[newsData.bcategory]
            }`}</Tag>
          </Link>
          {SmallCategory[newsData.scategory] && (
            <Link to={`/news/category/${newsData.scategory}`}>
              <Tag fontSize={"12px"}>{`# ${
                SmallCategory[newsData.scategory]
              }`}</Tag>
            </Link>
          )}
        </NewsTags>
        <LikeBox data-tour="like">
          <LikeButton
            isLiked={isLiked}
            handleLikeButtonClick={handleLikeButtonClick}
          />
        </LikeBox>
      </NewsTagAndLike>
      <br />
      <h3>{newsData.title}</h3>
      <br />
      <div style={{ fontSize: "15px", color: "gray" }}>{newsDate}</div>
    </MainNewsHeaderContainer>
  );
}
