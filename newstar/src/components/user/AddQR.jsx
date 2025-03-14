// qr로 정보 불러오기
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from 'react';
import jsQR from "jsqr";

const FileContainer = styled.div `
  margin: 10px 0px;
`;

export default function AddQR() {
  const [qrText, setQrText] = useState("");
  const [keyValue, setKeyValue] = useState("");

  const handleReadQr = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const image = new Image();

        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          
          if (code) {
            if(code.data == "null") {
              setQrText("인식할 수 없습니다");
            } else {
              setQrText(code.data);
            }
            setKeyValue(code.data);
          } else {
            alert("QR 코드를 인식할 수 없습니다.");
          }
        };
        image.src = imageData;
      };
      reader.readAsDataURL(file);
    }
  };

  const registKey = (event) => {
    // spring에서 키값 검사
        localStorage.setItem("X-USER-ID", keyValue);
        window.location.reload();
  }

  return (
    <div>
      <h2>내정보 불러오기 </h2>
      <FileContainer>
        <label style={{fontSize: "12px" }} className="input-file-button" htmlFor="input-file">
          파일선택
        </label>
        <input type="file" id="input-file" style={{display:"none"}} onChange={handleReadQr}/>
      </FileContainer>
      <p style={{marginTop: "15px"}}>복구 코드: {qrText}</p>
      <button className="file-btn" onClick={registKey}>등록</button>
    </div>
  );
}
