import React from 'react';
import SorryImg from '../assets/sorry.png';

function ErrorPage() {
    return (
        <div
            style={{
                padding: '50px',
                textAlign: 'center',
                fontFamily: "'Roboto', sans-serif", // Soft font style
            }}
        >
            <h1>해당 요청은 존재하지 않습니다</h1>
            <p>뒤로가기 버튼을 클릭해주세요</p>

            <img src={SorryImg} alt="이미지가 안뜨네" width={500} height={550}></img>
        </div>
    );
}

export default ErrorPage;
