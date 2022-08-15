import React, { useEffect, useRef } from "react";
import {
  ControlledMenu,
  MenuHeader,
  MenuItem,
  useMenuState
} from '@szhsin/react-menu';
import '../App.css';

const Dialog = ({selected, correct, toggleSelect}) => {
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  useEffect(() => {
    if (selected) toggleMenu(true)
  }, [selected])

  const closeDialog = () => {
    toggleMenu(false)
    toggleSelect()
  }

  return (
    <>
      <div ref={ref} className="dialog-ref"></div>
      <ControlledMenu {...menuProps} anchorRef={ref}
        onClose={closeDialog}
        menuClassName="dialog-menu">
        { correct ? 
          <MenuHeader>YUP</MenuHeader>
          : <MenuHeader>NOPE</MenuHeader>}  
        <MenuItem>Close Window</MenuItem>
      </ControlledMenu>
    </>
  );
}

export default Dialog;