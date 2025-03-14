import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    width: auto;
    padding: 8px 20px;
    font-size: 15px;
    font-weight: 600;
    background-color: rgb(138, 192, 56, 0.7);
    box-shadow: 2px 2px 7px 1px lightgray;
    cursor: pointer;
    color: white;
    &:hover {
        background-color: ${(props) => props.$background || 'rgb(138, 192, 56)'};
        transition: background-color 0.3s ease;
    }
`;

const NextButton = ({ onClick, content, $background }) => {
    return (
        <StyledButton onClick={onClick} $background={$background}>
            {content}
        </StyledButton>
    );
};

export default NextButton;
