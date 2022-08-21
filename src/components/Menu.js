import React, { useEffect, useState } from 'react';
import {
    ControlledMenu,
    MenuHeader,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '../App.css';
import '@szhsin/react-menu/dist/index.css'

const Menu = ({handleClick, toggleClicked, checkClick, found}) => {
  const [menuProps, toggleMenu] = useMenuState();
  const [anchorPoint, setAnchorpoint] = useState({x: 0, y: 0})

  const onMouseClick = (e) => {
    setAnchorpoint({ x: e.clientX, y: e.clientY })
    handleClick({x: e.pageX, y: e.pageY});
    toggleMenu(true);
  }

  const onMouseLeave = () => {
    toggleMenu(false);
    toggleClicked();
  }

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      toggleMenu(false)
      toggleClicked();
    }
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
        <MenuItem id="1" onClick={onSelect} disabled={found[1]}>
          <div id="1" className="menu-item">
          good face 1
          </div>
        </MenuItem>
        <MenuItem id="2" onClick={onSelect} disabled={found[2]}>
         <div id="2" className="menu-item">
          good face 2
          </div>
        </MenuItem>
        <MenuItem id="3" onClick={onSelect} disabled={found[3]}>
         <div id="3" className="menu-item">
          good face 3
          </div>
        </MenuItem>
        <MenuItem id="4" onClick={onSelect} disabled={found[4]}>
          <div id="4" className="menu-item">
          dog
          </div>
        </MenuItem>
        <MenuItem id="5" onClick={onSelect} disabled={found[5]}>
          <div id="5" className="menu-item">
          jesus
          </div>
        </MenuItem>
    </ControlledMenu>
  );
};

export default Menu;