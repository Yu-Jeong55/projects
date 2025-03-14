import BookMark from "./BookMark";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainNewsBodyWrapper = styled.div`
  padding: 20px;
`;

export default function MainNewsBody({ newsData }) {
  const navigate = useNavigate();

  return (
    <MainNewsBodyWrapper>
      <div>{newsData.content}</div>
      <br />
      <a href={newsData.url} data-tour="link">
        <BookMark newsData={newsData} />
      </a>
    </MainNewsBodyWrapper>
  );
}
