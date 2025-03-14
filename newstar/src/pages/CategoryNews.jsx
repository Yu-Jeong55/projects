import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BigCategory,
  BigCategoryData,
  SmallCategoryData,
} from "../state/categoryData";

const CategoryNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border-bottom: 0.5px solid lightgray;
`;

const BigCategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  color: ${(props) => (props.$isOpen ? "white" : "black")};
  background-color: ${(props) =>
    props.$isOpen ? "rgb(138, 192, 56, 0.7)" : "white"};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: rgb(138, 192, 56, 0.7);
    color: white;
  }
`;

const SmallCategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  color: black;
  background-color: ${(props) => (props.$isOpen ? "#f9f9f9" : "white")};
  border-bottom: 0.5px solid lightgray;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgb(138, 192, 56, 0.6);
    color: white;
    transition: 0.5s;
  }
`;

export default function CategoryNews() {
  const navigate = useNavigate();
  const BigData = BigCategoryData;

  const initialHideState = BigData.reduce((acc, cur) => {
    acc[cur.code] = false;
    return acc;
  }, {});

  const [hide, setHide] = useState(initialHideState);

  function mouseEvent(code) {
    setHide((prev) => {
      const newState = {};
      // 모든 카테고리를 닫고
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      // 클릭한 카테고리만 토글
      newState[code] = !prev[code];
      return newState;
    });
  }

  function renderSmallCategory(bigCategoryCode) {
    return (
      <>
        <SmallCategoryBox
          onClick={() => navigate(`/news/category/${bigCategoryCode}`)}
          $isOpen={hide[bigCategoryCode]}
        >
          {BigCategory[bigCategoryCode]} 전체
        </SmallCategoryBox>
        {SmallCategoryData[bigCategoryCode]?.map((small) => (
          <SmallCategoryBox
            key={small.code}
            onClick={() => navigate(`/news/category/${small.code}`)}
            $isOpen={hide[bigCategoryCode]}
          >
            {small.name}
          </SmallCategoryBox>
        ))}
      </>
    );
  }

  return (
    <CategoryNewsContainer>
      {BigData.map((big) => (
        <CategoryBox key={big.code}>
          <BigCategoryBox
            onClick={() => mouseEvent(big.code)}
            $isOpen={hide[big.code]}
          >
            {big.name}
          </BigCategoryBox>
          {hide[big.code] && renderSmallCategory(big.code)}
        </CategoryBox>
      ))}
    </CategoryNewsContainer>
  );
}
