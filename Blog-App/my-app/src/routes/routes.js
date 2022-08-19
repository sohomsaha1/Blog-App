import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
              name="Home"
              component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );


export default Routes;
