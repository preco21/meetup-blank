import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import RichTextEditor from 'react-rte';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import * as contentActions from './contentActions';
import * as styles from './styles.css';

function Content({
  params: {
    memoId,
  },
  content: {
    currentContentId,
    contents,
  },
  updateContentName,
  updateContent,
}) {
  const content = contents.find(({id: contentId}) => contentId === currentContentId || contentId === memoId);

  if (content === undefined) {
    hashHistory.push('/');
  }

  const {id, name, contentState} = content || {};

  const childEl = id
    ? (
      <div className={styles.editorContainer}>
        <TextField
          name={id}
          className={styles.title}
          value={name}
          onChange={({target: {value}}) => updateContentName(id, value)}
        />
        <div className={styles.editor}>
          <RichTextEditor
            value={contentState}
            onChange={(editorState) => updateContent(id, editorState)}
            autoFocus
          />
        </div>
      </div>
    )
    : <div />;

  return (
    <div className={styles.base}>
      <Paper className={styles.container} zDepth={1}>
        {childEl}
      </Paper>
    </div>
  );
}

const ConnectedContent = connect(
  (state) => state,
  (dispatch) => bindActionCreators(contentActions, dispatch),
)(Content);

export {
  ConnectedContent as default,
};
