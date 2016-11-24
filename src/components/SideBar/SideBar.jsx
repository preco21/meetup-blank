import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import * as sideBarActions from './sideBarActions';

function SideBar({
  header: {
    isOpened,
  },
  content: {
    currentContentId,
    contents,
  },
  openMemo,
  toggleMenu,
  createNewMemo,
}) {
  return (
    <div>
      <Drawer
        docked={false}
        width={200}
        open={isOpened}
        onRequestChange={(open) => toggleMenu(open)}
      >
        <AppBar title="Menu" showMenuIconButton={false} />
        <MenuItem onTouchTap={() => createNewMemo('TEMP NAME', open)}>
          [ Add Memo + ]
        </MenuItem>
        {contents
          .map(({id, name}) => (
            <MenuItem key={id} onTouchTap={() => openMemo(id)}>
              {name}
            </MenuItem>
          ))}
      </Drawer>
    </div>
  );
}

const ConnectedSideBar = connect(
  (state) => state,
  (dispatch) => bindActionCreators(sideBarActions, dispatch),
)(SideBar);

export {
  ConnectedSideBar as default,
};
