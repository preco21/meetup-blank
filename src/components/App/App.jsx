import React, {Component, PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from '../Header';
import SideBar from '../SideBar';
import theme from './theme';

const muiTheme = getMuiTheme(theme);

class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          {this.props.children}
          <SideBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export {
  App as default,
};
