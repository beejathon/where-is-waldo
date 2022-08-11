import React, { useEffect } from 'react';
import {
    ControlledMenu,
    MenuHeader,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Menu = ({coords, handleClick, handleMouseLeave}) => {
  const [menuProps, toggleMenu] = useMenuState();

  const onMouseClick = (e) => {
    e.preventDefault();
    handleClick({ x: e.clientX, y: e.clientY });
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
    }
  }, [])

  return (
    <ControlledMenu 
      {...menuProps} 
      anchorPoint={coords}
      onMouseLeave={onMouseLeave}
      menuClassName="my-menu">
      <MenuHeader>
        Who or what is it?
      </MenuHeader>
        <MenuItem
          onClick={() => console.log(coords)}>
          THIS
        </MenuItem>
        <MenuItem
          onClick={() => console.log(coords)}>
          IS HOW
        </MenuItem>
        <MenuItem
          onClick={() => console.log(coords)}>
          WE DO
        </MenuItem>
    </ControlledMenu>
);
};

export default Menu;