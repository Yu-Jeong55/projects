// 앱 소개 및 설명 페이지
// 아래로 스크롤
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import searchNewsLottie from "../assets/lottie/searchNews.json";
import NewsLottie from "../assets/lottie/News.json";
import NewStart from "../assets/lottie/NewStart.json";
import SelectLottie from "../assets/lottie/Select.json";
import LikeLottie from "../assets/lottie/like.json";

import OldUserModal from "../components/OldUser";

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 160px;
`;

const UseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 100px;
`;

const IntroBox1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 70px;
`;

const IntroBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const IntroBox3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const UseBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UseBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OldUser = styled.div`
  font-size: 15px;
  color: #454545;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    transition: background-color 0.5s ease;
  }
`;

const StartBtn = styled.button`
  border: none;
  border-radius: 5px;
  width: 90%;
  padding: 10px 30px;
  font-size: 20px;
  color: white;
  font-weight: 550;
  background-color: rgb(138, 192, 56, 0.7);
  margin: 5px;
  box-shadow: 2px 2px 7px 1px lightgray;
  cursor: pointer;
  &:hover {
    background-color: rgb(138, 192, 56);
    transition: background-color 0.3s ease;
  }
`;
const LottieStyle = {
  height: "150px",
  width: "150px",
};

function HowToUse() {
  return (
    <UseWrapper>
      <div data-aos="fade-up">
        <UseBox2>
          <h4>먼저, 관심있는 분야를 선택하고</h4>
          <Lottie animationData={SelectLottie} style={LottieStyle} />
        </UseBox2>
      </div>
      <div data-aos="fade-up">
        <UseBox1>
          <h4>뉴스를 추천받은 후</h4>
          <Lottie animationData={NewsLottie} style={LottieStyle} />
        </UseBox1>
      </div>
      <div data-aos="fade-up">
        <UseBox2>
          <h4>좋아요로 관심을 표시하세요</h4>
          <Lottie animationData={LikeLottie} style={LottieStyle} />
        </UseBox2>
      </div>
    </UseWrapper>
  );
}

export default function Intro() {
  const navigate = useNavigate();
  const [isOldUserModalOpen, setIsOldUserModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <IntroWrapper>
      <IntroBox1>
        <div data-aos="fade-up">
          <h2>아직도 기사</h2>
          <h2>검색해서 보시나요?</h2>
        </div>
        <div data-aos="fade-up">
          <UseBox1>
            <Lottie
              animationData={searchNewsLottie}
              style={{ width: "300px", height: "300px" }}
            />
          </UseBox1>
        </div>
      </IntroBox1>
      <HowToUse />
      <div data-aos="fade-up">
        <div>
          <h4 style={{ textAlign: "center" }}>내가 관심있는 뉴스만</h4>
          <h4 style={{ textAlign: "center" }}>
            빠르고 간편하게 보실 수 있습니다!
          </h4>
        </div>
      </div>
      <IntroBox2>
        <div>바쁜 현대인들을 위한</div>
        <h2>뉴스 기사 숏폼</h2>
      </IntroBox2>

      <IntroBox3>
        <div data-aos="fade-up">
          <IntroBox2>
            <img src="/logo_dark.png" alt="newstar_logo" width={150} />
            <h4>지금 시작해보세요!</h4>
          </IntroBox2>
          <Lottie
            animationData={NewStart}
            style={{ width: "250px", height: "250px" }}
          />
        </div>
      </IntroBox3>
      <IntroBox2>
        <StartBtn onClick={() => navigate("/choose")}>시 작 하 기</StartBtn>
        <OldUser onClick={() => setIsOldUserModalOpen(true)}>
          newstar를 이용해 보신 적이 있으신가요?
        </OldUser>
      </IntroBox2>
      <OldUserModal
        isOldUserModalOpen={isOldUserModalOpen}
        setIsOldUserModalOpen={setIsOldUserModalOpen}
      />
    </IntroWrapper>
  );
}
