import styled from 'styled-components';

// 전체 페이지
const TotalContainer = styled.div`
    min-height: calc(100vh - 120px);
`;

// 네브바 없는 페이지
const ContainerWithoutNav = styled.main`
    position: relative;
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
`;

// 네브바 있는 페이지
const ContainerWithNav = styled.main`
    max-width: 500px;
    min-width: 280px;
    margin: 50px auto 70px;

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export { ContainerWithNav, ContainerWithoutNav, TotalContainer };
