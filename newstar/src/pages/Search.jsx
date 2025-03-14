// 기사 검색 페이지
// 키워드로 뉴스 실시간 검색

import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchNewsList from "../components/main/SearchNewsList";
import { NewsRandomData } from "../data/newsData";

const SearchContainer = styled.div`
  padding: 10px 20px 0px;
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

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSetKeyword = (newKeyword) => {
    setKeyword(newKeyword);
    if (newKeyword.trim() === "") {
      setFilteredNews([]);
      setSearchPerformed(false);
    } else {
      const searchTerm = newKeyword.trim().toLowerCase();
      const filteredData = NewsRandomData.filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm) ||
          news.content.toLowerCase().includes(searchTerm)
      );
      setFilteredNews(filteredData);
      setSearchPerformed(true);
    }
  };

  return (
    <SearchContainer>
      <SearchBar setKeyword={handleSetKeyword} initialValue="AI" />
      {searchPerformed ? (
        filteredNews.length > 0 ? (
          <SearchNewsList NewsData={filteredNews} />
        ) : (
          <EmptyContainer>검색 결과가 없습니다 😅</EmptyContainer>
        )
      ) : (
        <EmptyContainer>찾으시는 뉴스를 검색해주세요 🔍</EmptyContainer>
      )}
    </SearchContainer>
  );
}
