import React, { useEffect } from 'react';
import { useState } from 'react';
import {
    ControlledMenu,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Menu = () => {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    toggleMenu(true);
  }

  useEffect(() => {
    const img = document.querySelector('.waldo')
    img.addEventListener('click', handleClick)

    return () => {
      img.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <ControlledMenu {...menuProps} anchorPoint={anchorPoint}
        onMouseLeave={() => toggleMenu(false)}
        menuClassName="my-menu">
        <MenuItem>THIS</MenuItem>
        <MenuItem>IS</MenuItem>
        <MenuItem>HOW</MenuItem>
        <MenuItem>WE</MenuItem>
        <MenuItem>DO</MenuItem>
    </ControlledMenu>
);
};

export default Menu;