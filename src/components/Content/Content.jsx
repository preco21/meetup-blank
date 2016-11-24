import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Editor, RichUtils} from 'draft-js';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as contentActions from './contentActions';
import * as styles from './styles.css';

function Content({
  content: {
    currentContentId,
    contents,
  },
  updateContentName,
  updateContent,
}) {
  const {id, name, contentState} = contents.find(({id: contentId}) => contentId === currentContentId) || {};

  const childEl = id
    ? (
      <div>
        <TextField
          className={styles.title}
          defaultValue={name}
          onChange={({target: {value}}) => updateContentName(id, value)}
        />
        <div>
          <div className={styles.buttons}>
            <FlatButton primary={true} label="H1" />
            <FlatButton primary={false} label="H2" />
            <FlatButton primary={false} label="H3" />
            <FlatButton primary={false} label="H4" />
            <FlatButton primary={false} label="H5" />
            <FlatButton primary={false} label="H6" />
            <FlatButton primary={false} label="Blockquote" />
            <FlatButton primary={false} label="UL" />
            <FlatButton primary={false} label="OL" />
            <FlatButton primary={false} label="CodeBlock" />
            <FlatButton primary={false} label="Bold" />
            <FlatButton primary={false} label="Italic" />
            <FlatButton primary={false} label="Underline" />
            <FlatButton primary={false} label="Monospace" />
          </div>
          <Editor editorState={contentState} onChange={(editorState) => updateContent(id, editorState)} />
        </div>
      </div>
    )
    : (
      <div>
        NO DATA
      </div>
    );

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
