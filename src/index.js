/* eslint-disable prettier/prettier */
import React from 'react';
import { YellowBox } from 'react-native'
import Routes from './routes'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <Routes/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: 'flex',
//     backgroundColor: '#7159c1',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     color: '#FFF',
//     fontSize: 20,
//   },
// });
