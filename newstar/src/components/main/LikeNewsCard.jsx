import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SmallCategory } from '../../state/categoryData';

const LikeNewsCardWrappr = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    min-width: 120px;
    max-width: 120px;
    height: 120px;
    padding: 10px;
    gap: 7px;

    background-color: ${(props) => props.$background || 'rgb(138, 192, 56)'};
    cursor: pointer;
`;

const LikeNewsScate = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: white;
`;

const LikeNewsTitle = styled.div`
    font-size: 13px;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

export default function LikeNewsCard({ likeData, $background }) {
    const navigate = useNavigate();
    return (
        <LikeNewsCardWrappr $background={$background} onClick={() => navigate(`/newstar/${likeData.article_id}`)}>
            <LikeNewsScate>{`# ${SmallCategory[likeData.scategory]}`}</LikeNewsScate>
            <LikeNewsTitle>{likeData.title}</LikeNewsTitle>
        </LikeNewsCardWrappr>
    );
}
