/**
 * BrainTask React Native App
 * https://github.com/facebook/react-native
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InitialNavigation from './src/navigation';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
      />
      <SafeAreaView edges={['right', 'bottom', 'left']} />
      <View style={{ flex: 1 }}>
        <InitialNavigation />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
