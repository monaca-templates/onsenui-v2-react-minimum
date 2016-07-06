import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button} from 'react-onsenui';

// Load Onsen UI library
import 'onsenui';

// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/font_awesome/css/font-awesome.min.css');
require('onsenui/css/ionicons/css/ionicons.min.css');
require('onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css');

class App extends React.Component {

  render() {
    return (
      <Page>
        <div>Hello World!</div>
        <Button>Onsen UI Button</Button>
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
