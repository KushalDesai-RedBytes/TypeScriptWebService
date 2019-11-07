/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NetworkProvider } from './src/component/NetworkProvider';

import { ExampleComponent } from './src/screens/ExampleComponent';


export default class App extends React.PureComponent {

  

  render(){
    return (
      <NetworkProvider>
        <ExampleComponent />
      </NetworkProvider>
    );
  }
};
