// Sidebar.tsx
import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import Icon from '../../atoms/icons/IconCompornent';
import { IconType } from 'react-icons';

interface MenuItem {
  icon: IconType;
  name: string;
  link: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.link)}
            className={location.pathname === item.link ? 'active' : ''}
          >
            <Icon 
              Icon={item.icon}
              size="1em"
              color={location.pathname === item.link ? 'rgb(20, 106, 245)' : 'black'}
              className="menu-icon"
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;