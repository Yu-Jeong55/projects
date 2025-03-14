// 마이페이지
// 내 정보, 내 선호도(워드 클라우드), 내가 본 기사, 좋아요 한 기사,

import MyNews from "../components/user/MyNews";
import LikeNews from "../components/user/LikeNews";
import styled from "styled-components";

const MyPageContainer = styled.div`
  padding: 50px 30px 20px;

  // 직접 자식 컴포넌트들 사이에 간격을 추가
  & > * + * {
    margin-top: 50px;
  }
`;

export default function MyPage() {
  return (
    <MyPageContainer>
      <MyNews />
      <LikeNews />
    </MyPageContainer>
  );
}
