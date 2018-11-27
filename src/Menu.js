import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import MenuIcon from '@material-ui/icons/Menu';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function RenderPropsMenu() {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <MenuIcon
             classes={{
              root: 'the-hamburger-button', // class name, e.g. `classes-nesting-root-x`
              }} 
              aria-owns={open ? 'render-props-menu' : null}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            />
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <div id="the-props-menu" >
              <MenuItem onClick={handleClose}>Maybe Profile</MenuItem>
              <MenuItem onClick={handleClose}>Maybe My account</MenuItem>
              <MenuItem onClick={handleClose}>Maybe Logout</MenuItem>
              </div>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default RenderPropsMenu;
