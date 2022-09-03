import React, { useEffect, useState } from 'react';
import {
    ControlledMenu,
    MenuHeader,
    MenuItem,
    useMenuState
} from '@szhsin/react-menu';
import '../App.css';
import '@szhsin/react-menu/dist/index.css'
import waldo1 from '../assets/1.png'
import waldo2 from '../assets/2.png'
import waldo3 from '../assets/3.png'
import waldo4 from '../assets/4.png'
import waldo5 from '../assets/5.png'

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
        <div className="menu-header">
          Who or what is it?
        </div>
      </MenuHeader>
      <MenuItem className="menu-item" id="1" onClick={onSelect} disabled={found[1]}>
        Vanilla Face <img src={waldo1} alt="waldo1" /> 
      </MenuItem>
      <MenuItem className="menu-item" id="2" onClick={onSelect} disabled={found[2]}>
        Spoony Eyes <img src={waldo2} alt="waldo2" /> 
      </MenuItem>
      <MenuItem className="menu-item" id="3" onClick={onSelect} disabled={found[3]}>
        Smiling Serenely <img src={waldo3} alt="waldo3" />
      </MenuItem>
      <MenuItem className="menu-item" id="4" onClick={onSelect} disabled={found[4]}>
        Good Boy <img src={waldo4} alt="waldo4" />
      </MenuItem>
      <MenuItem className="menu-item" id="5" onClick={onSelect} disabled={found[5]}>
        Jesus on the Cross <img src={waldo5} alt="waldo5" />
      </MenuItem>
    </ControlledMenu>
  );
};

export default Menu;