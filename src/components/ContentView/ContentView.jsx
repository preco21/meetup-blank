import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function ContentView() {
  return <div>히이이익</div>;
}

const ConnectedContentView = connect(
  (state) => state,
  (dispatch) => bindActionCreators({}, dispatch),
)(ContentView);

export {
  ConnectedContentView as default,
};
