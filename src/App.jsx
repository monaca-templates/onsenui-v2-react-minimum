import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button} from 'react-onsenui';

export default class App extends React.Component {

  render() {
    return (
      <Page>
        <div>Hello World!</div>
        <Button>Onsen UI Button</Button>
      </Page>
    );
  }
}