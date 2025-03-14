import React from "react"

import { IoHeart, IoHeartOutline } from "react-icons/io5";

const LikeButton = ({ handleLikeButtonClick, isLiked }) => {
    // isLiked가 true이면, 채워진 북마크 / false면, 빈 북마크 활성화
    const likeBtn = isLiked ? (
        <IoHeart onClick={handleLikeButtonClick} style={{ cursor: 'pointer' }} size={43} color="red" />
    ) : (
        <IoHeartOutline
            onClick={handleLikeButtonClick}
            style={{ cursor: 'pointer', TextShadow: '1px 1px 4px black' }}
            size={43}
            color="rgb(138, 192, 56, 0.7)"
        />
    );

    return likeBtn
};

export default LikeButton;
