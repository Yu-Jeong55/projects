import Modal from "react-modal";
import QRCode from "qrcode.react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userKeyState } from "../state/atoms";
import { useNavigate } from "react-router-dom";

import NextButton from "../common/Button";
import ModalComponent from "../Hooks/Modal";

const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const WarningWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Warning1 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: gray;
`;

const Warning2 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

function CreateQR() {
  const navigate = useNavigate();

  function handleDownloadClick() {
    const canvas = document.querySelector("canvas");
    const url = canvas ? canvas.toDataURL("image/png") : "";
    const link = document.createElement("a");
    link.href = url;
    link.download = `newstar-key.png`;
    link.click();
  }

  const userKey = useRecoilValue(userKeyState);

  return (
    <QRWrapper>
      <WarningWrapper>
        <h2 style={{ textAlign: "center" }}>복구키 저장</h2>
        <Warning1>앱을 삭제하시면 내 기록이 삭제됩니다!</Warning1>
        <br />
        <Warning2>
          <span style={{ color: "red" }}>복구키</span>를 다운로드 한 후,{" "}
        </Warning2>
        <Warning2>추후 재접속 시 QR코드 사진을 업로드 하면</Warning2>
        <Warning2>내 기록을 불러올 수 있습니다.</Warning2>
      </WarningWrapper>
      <QRCode
        value={userKey}
        size={220}
        style={{ visibility: "hidden", position: "absolute" }}
      />
      <ButtonWrapper>
        <NextButton onClick={handleDownloadClick} content={"다운로드"} />
        <NextButton onClick={() => navigate("/news")} content={"시작하기"} />
      </ButtonWrapper>
    </QRWrapper>
  );
}

function QRModal({ modalOpen, setModalOpen }) {
  return (
    <ModalComponent
      isOpen={modalOpen}
      setIsOpen={setModalOpen}
      modalContent={<CreateQR />}
    />
  );
}
export default QRModal;
