import React, { useEffect, useState } from 'react';
import {
    ControlledMenu,
    MenuHeader,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '../App.css';

const Menu = ({handleClick, toggleClicked, checkClick}) => {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorpoint] = useState({x: 0, y: 0})

  const onMouseClick = (e) => {
    setAnchorpoint({ x: e.clientX, y: e.clientY })
    handleClick({x: e.clientX, y: e.clientY});
    toggleMenu(true);
  }

  const onMouseLeave = () => {
    toggleMenu(false);
    toggleClicked();
  }

  const onKeyDown = (e) => {
    if (e.key === "Escape") toggleMenu(false)
  }

  const onSelect = (e) => {
    toggleMenu(false);
    checkClick(e.syntheticEvent.nativeEvent.target.id)
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
      menuClassName="puzzle-menu">
      <MenuHeader>
        Who or what is it?
      </MenuHeader>
        <MenuItem id="1" onClick={onSelect}>
          <div id="1" className="menu-item">
          good face 1
          </div>
        </MenuItem>
        <MenuItem id="2" onClick={onSelect}>
         <div id="2" className="menu-item">
          good face 2
          </div>
        </MenuItem>
        <MenuItem id="3" onClick={onSelect}>
         <div id="3" className="menu-item">
          good face 3
          </div>
        </MenuItem>
        <MenuItem id="4" onClick={onSelect}>
          <div id="4" className="menu-item">
          fish
          </div>
        </MenuItem>
        <MenuItem id="5" onClick={onSelect}>
          <div id="5" className="menu-item">
          dog
          </div>
        </MenuItem>
    </ControlledMenu>
  );
};

export default Menu;