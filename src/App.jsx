import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar } from 'react-onsenui';
import { notification } from 'onsenui';

export default class App extends React.Component {
  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div style={{textAlign: 'center'}}>Hello World!</div>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.alertPopup}>Click Me!</Button>
        </p>
      </Page>
    );
  }
}