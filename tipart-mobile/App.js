import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Components
import TopMenu from './components/topmenu';

export default class App extends React.Component {
  render() {
    return (
        <TopMenu name="chris" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
