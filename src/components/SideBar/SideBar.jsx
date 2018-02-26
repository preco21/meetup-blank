import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import * as sideBarActions from './sideBarActions';

function SideBar({
  header: {
    isOpened,
  },
  content: {
    contents,
  },
  openMemo,
  toggleMenu,
  createNewMemo,
  deleteMemo,
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
        <MenuItem onTouchTap={() => createNewMemo('', open)}>
          [ Add Memo + ]
        </MenuItem>
        {contents
          .map(({id, name}) => (
            <MenuItem key={id} onTouchTap={() => openMemo(id)}>
              {name || '[EMPTY]'}
              <FlatButton label="❌" onTouchTap={() => deleteMemo(id)} />
            </MenuItem>
          ))}
      </Drawer>
    </div>
  );
}

SideBar.propTypes = {
  header: PropTypes.shape({
    isOpened: PropTypes.bool,
  }),
  content: PropTypes.shape({
    contents: PropTypes.object,
  }),
  openMemo: PropTypes.func,
  toggleMenu: PropTypes.func,
  createNewMemo: PropTypes.func,
  deleteMemo: PropTypes.func,
};

const ConnectedSideBar = connect(
  (state) => state,
  (dispatch) => bindActionCreators(sideBarActions, dispatch),
)(SideBar);

export {
  ConnectedSideBar as default,
};