import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  Icon: IconType;
  size?: string;
  color?: string;
  className?: string;
}

const IconCompornent: React.FC<IconProps> = ({ Icon, size = "1em", color="black", className }) => (
  <Icon size={size} color={color} className={className} />
);

export default IconCompornent;