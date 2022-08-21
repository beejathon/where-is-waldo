import React, { useEffect, useRef } from "react";
import {
  ControlledMenu,
  MenuItem,
  useMenuState
} from '@szhsin/react-menu';
import '../App.css';
import '@szhsin/react-menu/dist/index.css'

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
          <MenuItem>
          <span class="material-icons">
            check_circle
          </span> Correct
          </MenuItem> :
          <MenuItem>
          <span class="material-icons">
            cancel
          </span> Try again
          </MenuItem>
        }
      </ControlledMenu>
    </>
  );
}

export default Dialog;