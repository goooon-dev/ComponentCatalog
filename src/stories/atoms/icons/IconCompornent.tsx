import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  Icon: IconType;
  size?: string;
  color?: string;
}

const IconCompornent: React.FC<IconProps> = ({ Icon, size = "1em", color="black" }) => (
  <Icon size={size} color={color} />
);

export default IconCompornent;