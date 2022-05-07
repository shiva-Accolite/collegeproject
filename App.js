import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

export default function App() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingHorizontal:15,
  },
});
