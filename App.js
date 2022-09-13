import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from "./navigation/CustomDrawer";
import {SignIn,SignUp, ForgotPassword, OnBoarding, FoodDetails} from "./screens";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./stores/rootReducer";


const Stack = createStackNavigator();
const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
);
const App = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />
                  <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />
                 <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                 <Stack.Screen
                    name="Drawer"
                    component={CustomDrawer}
                />
                <Stack.Screen
                    name="FoodDetails"
                    component={FoodDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App