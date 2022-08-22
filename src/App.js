import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import FirstScreen from './screens/first';
import SecondScreen from './screens/second';
import { GlobalStateProvider } from './hooks/useGlobalState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="First"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen
            name="First"
            component={FirstScreen}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
};

export default App;
