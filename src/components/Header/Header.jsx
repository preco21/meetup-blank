import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import * as headerActions from './headerActions';

function Header({toggleMenu}) {
  return (
    <AppBar
      title={<Link to="/view">Blank</Link>}
      onLeftIconButtonTouchTap={() => toggleMenu(true)}
    />
  );
}

const ConnectedHeader = connect(
  (state) => state,
  (dispatch) => bindActionCreators(headerActions, dispatch),
)(Header);

export {
  ConnectedHeader as default,
};
