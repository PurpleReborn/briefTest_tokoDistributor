/**
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import reduxConfig from './src/redux/reducers/store';
import {Provider} from 'react-redux';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const redux = reduxConfig();

const Main = () => {
  return (
    <Provider store={redux.store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
