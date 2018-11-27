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
        // const handleClose = () => {
        //   updateAnchorEl(null);
        // };

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
            <Menu anchorEl={anchorEl} open={open}>
            <div className="the-props-menu" >
              <MenuItem>Maybe Profile</MenuItem>
              <MenuItem>Maybe My account</MenuItem>
              <MenuItem>Maybe Logout</MenuItem>
              </div>
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

export default RenderPropsMenu;
