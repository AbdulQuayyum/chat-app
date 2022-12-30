// Dependencies
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// UI Views
import Chat from "./Views/ProtectedRoute/Chat";
import Home from "./Views/ProtectedRoute/Home";
import SignIn from "./Views/Auth/SignIn"
import SignUp from "./Views/Auth/SignUp";

const Stack = createStackNavigator()

function ProtectedRouteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ProtectedRouteStack />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <RootNavigator />
  )
}
