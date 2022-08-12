import React, { useEffect, useState } from 'react';
import {
    ControlledMenu,
    MenuHeader,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';



const Menu = ({handleClick, handleMouseLeave, checkClick}) => {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorpoint] = useState({x: 0, y: 0})

  const onMouseClick = (e) => {
    setAnchorpoint({ x: e.clientX, y: e.clientY })
    handleClick({x: e.clientX, y: e.clientY});
    toggleMenu(true);
  }

  const onMouseLeave = () => {
    toggleMenu(false);
    handleMouseLeave();
  }

  const onKeyDown = (e) => {
    if (e.key === "Escape") toggleMenu(false)
  }

  useEffect(() => {
    const img = document.querySelector('.waldo')
    img.addEventListener('click', onMouseClick)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      img.removeEventListener('click', onMouseClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <ControlledMenu 
      {...menuProps} 
      anchorPoint={anchorPoint}
      onMouseLeave={onMouseLeave}
      menuClassName="my-menu">
      <MenuHeader>
        Who or what is it?
      </MenuHeader>
        <MenuItem
          onClick={checkClick}>
          good face 1
        </MenuItem>
        <MenuItem
          onClick={checkClick}>
          good face 2
        </MenuItem>
        <MenuItem
          onClick={checkClick}>
          good face 3
        </MenuItem>
        <MenuItem
          onClick={checkClick}>
          fish
        </MenuItem>
        <MenuItem
          onClick={checkClick}>
          dog
        </MenuItem>
    </ControlledMenu>
);
};

export default Menu;