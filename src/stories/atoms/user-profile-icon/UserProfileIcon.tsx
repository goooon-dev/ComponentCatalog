import React from 'react';
import './UserProfileIcon.css';

interface UserProfileIconProps {
  imageUrl?: string;
  altText: string;
  size?: string;
}

export const UserProfileIcon: React.FC<UserProfileIconProps> = ({
  imageUrl,
  altText,
  size = '50px'
}) => {
  // フォントサイズを計算するロジック
  const fontSize = `calc(${size} / 2)`; // size の半分のサイズ

  return (
    <div className="user-profile-icon" style={{ width: size, height: size }}>
      {imageUrl ? (
        <img src={imageUrl} alt={altText} className="user-profile-image" style={{ width: size, height: size }} />
      ) : (
        <div className="user-profile-placeholder" style={{ fontSize }}>
          {altText.charAt(0)}
        </div>
      )}
    </div>
  );
};
