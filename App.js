import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';
import login from './screens/login';
import home from './screens/home';
import register from './screens/register';
import Progress from './screens/Progress';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="alten"
          component={Progress}
          // options={{
          //   headerTitleAlign: 'center',
          //   headerBackTitle: 'djdj',
          //   //
          // }}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false, headerTitleAlign: 'center' }}
        />

        <Stack.Screen
          name="Register"
          component={register}
          options={{
            headerTitleAlign: 'center',
            headerBackTitle: 'djdj',
          }}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={home}
          // options={{
          //   headerTitleAlign: 'center',
          //   headerBackTitle: 'djdj',
          //   //
          // }}
          //options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
