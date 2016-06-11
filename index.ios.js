import StartSlider from './App/Components/StartSlider'
import User from './App/Components/User'
import MainMapView from './App/Components/MainMapView'


import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';


/**
 * Overwrite the default navigator scene config.
 * to use a wider area for back swiping.
 */
const FloatFromRight = {
  ...Navigator.SceneConfigs.FloatFromRight,
  gestures: {
    pop: {
      ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
      edgeHitWidth: SCREEN_WIDTH / 2,
    },
  },
};


class skillnest extends Component {
  render() {
    return (
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'StartSlider' }}
          renderScene={ this.renderScene }
          configureScene={ () => FloatFromRight }
          />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'StartSlider') {
       return <StartSlider navigator={navigator} />
     }
     if(route.name == 'User') {
       return <User navigator={navigaotr} />
     }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('skillnest', () => skillnest);
