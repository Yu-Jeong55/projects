// 내가 본 뉴스, 좋아요 한 뉴스 카드
import Slider from "react-slick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// styled-components
const SlideWrapper = styled.div`
  padding: 3px; // 좌우 패딩으로 카드 간격 조정
  gap: 20px;
  display: flex;
`;

const Card = styled.div`
  padding: 10px;
  border-radius: 5px;
  width: 120px;
  min-height: 120px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 7px 1px lightgray;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease; // 배경색 변화에 애니메이션 효과 적용

  &:hover {
    background-color: rgb(138, 192, 56); // 마우스를 올렸을 때의 배경색
  }
`;

const Title = styled.h2`
  font-size: 14px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  height: calc(100% - 20px);
  text-align: center; // 텍스트를 가운데 정렬
  display: block; // 텍스트가 여러 줄일 경우를 고려하여 block으로 변경
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    margin-right: -50px; // 오타 수정
  }

  .slick-slide > div {
    margin: 0 10px; // 각 슬라이드 요소의 좌우에 여백 추가
  }
`;

const SubNewsCard = ({ records }) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4, // 한 번에 보여질 슬라이드 수
    slidesToScroll: 4, // 스크롤할 때 넘어가는 슬라이드 수
  };

  return (
    <StyledSlider {...settings}>
      {Array.isArray(records)
        ? records.map((record) => (
            <SlideWrapper key={record.id}>
              <Card onClick={() => navigate(record.url)}>
                <Title>{record.title}</Title>
              </Card>
            </SlideWrapper>
          ))
        : null}
    </StyledSlider>
  );
};

export default SubNewsCard;
