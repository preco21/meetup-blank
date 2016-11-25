import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {Card, CardHeader} from 'material-ui/Card';

function ContentView({
  content: {
    contents,
  },
}) {
  return (
    <div>
      {contents.length < 1
        ? (
          <div>NO MEMO</div>
        )
        : (
          <div>
            {contents.map(({id, name}) => (
              <Card key={id} onTouchTap={() => hashHistory.push(`/memo/${id}`)}>
                <CardHeader title={name} />
              </Card>
            ))}
          </div>
        )}
    </div>
  );
}

const ConnectedContentView = connect(
  (state) => state,
  (dispatch) => bindActionCreators({}, dispatch),
)(ContentView);

export {
  ConnectedContentView as default,
};
