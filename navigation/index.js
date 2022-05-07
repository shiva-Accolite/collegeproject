import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
         <Stack.Screen name='Quiz' component={Quiz} options={{headerShown:false}}/>
         <Stack.Screen name='Result' component={Result} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;