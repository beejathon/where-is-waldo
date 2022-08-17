import React, { useEffect, useRef } from "react";
import {
  ControlledMenu,
  MenuItem,
  useMenuState
} from '@szhsin/react-menu';
import '../App.css';

const Dialog = (props) => {
  const {showDialog, correct, toggleDialog} = props;
  const ref = useRef(null);
  const [menuProps, toggleMenu] = useMenuState({ transition: true });

  useEffect(() => {
    if (showDialog) toggleMenu(true)
  }, [showDialog])

  const closeDialog = () => {
    toggleMenu(false);
    toggleDialog();
  }

  return (
    <>
      <div ref={ref} className="dialog-ref"></div>
      <ControlledMenu {...menuProps} anchorRef={ref}
        onClose={closeDialog}
        menuClassName="dialog-menu">
        { correct ? 
          <h1>YUP!</h1> :
          <h1>NOPE!</h1>
        }  
        <MenuItem>Close Window</MenuItem>
      </ControlledMenu>
    </>
  );
}

export default Dialog;