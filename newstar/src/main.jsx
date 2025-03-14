import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RecoilRoot } from 'recoil';
import './index.css';
import { TourProvider } from '@reactour/tour';

const steps = [
    {
        selector: '[data-tour="tag"]',
        content: '해시태그를 선택하면 동일한 카테고리의 뉴스를 볼 수 있어요!',
    },
    {
        selector: '[data-tour="like"]',
        content: '좋아요를 누르면 선호하는 뉴스를 모아볼 수 있어요!',
    },
    {
        selector: '[data-tour="link"]',
        content: '북마크를 누르면 기사를 상세하게 읽어볼 수 있어요!',
    },
    {
        selector: '[data-tour="slider"]',
        content: '뉴스 숏폼을 양쪽으로 슬라이딩하여 넘길 수 있어요!',
    },
];

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RecoilRoot>
            <TourProvider
                steps={steps}
                styles={{
                    popover: (base) => ({
                        ...base,
                        '--reactour-accent': 'rgb(138, 192, 56, 0.7)',
                        borderRadius: 8,
                        padding: 40,
                    }),
                    maskArea: (base) => ({ ...base, rx: 4 }),
                }}
                onClickMask={({ setCurrentStep, currentStep, steps, setIsOpen }) => {
                    if (steps) {
                        if (currentStep === steps.length - 1) {
                            setIsOpen(false);
                        }
                        setCurrentStep((s) => (s === steps.length - 1 ? 0 : s + 1));
                    }
                }}
                onClickHighlighted={(e) => {
                    e.stopPropagation();
                }}
                disableInteraction
            >
                <App />
            </TourProvider>
        </RecoilRoot>
    </React.StrictMode>
);
