// 뉴스 카테고리별로 모아보기
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useRecoilState } from "recoil";

import { categoryDataState } from "../state/atoms";
import CategoryNewsCard from "../components/main/CategoryNewsCard";

const CategoryNewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 80px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: calc((100vh / 2) - 100px);
  padding: 20px;
  font-weight: 600;
`;

export default function CategoryNewsDetail() {
  const params = useParams();

  // 뉴스 데이터
  const [categoryData, setCategoryData] = useRecoilState(categoryDataState);
  const [categoryTitle, setCategoryTitle] = useState("");

  return (
    <CategoryNewsCardContainer>
      <div style={{ fontWeight: 900, fontSize: 20, textAlign: "center" }}>
        {categoryTitle}
      </div>
      {categoryData.length > 0 ? (
        categoryData.map((data) => (
          <CategoryNewsCard
            key={`${data.article_id}-${data.title}`}
            categoryData={data}
          />
        ))
      ) : (
        <BoxContainer>결과가 존재하지 않습니다.</BoxContainer>
      )}
    </CategoryNewsCardContainer>
  );
}
