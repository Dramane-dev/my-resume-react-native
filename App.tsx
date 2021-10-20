import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import HomeScreen from "./components/Home/HomeScreen";
import Details from "./components/Details/Details";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const [user, setUser] = useState(false);
    let isLogged = async () => {
        if ((await AsyncStorage.getItem("user")) !== null) {
            setUser(true);
        } else {
            setUser(false);
        }
    };

    useEffect(() => {
        isLogged();
    }, [user]);

    return (
        <>
            <NavigationContainer>
                {user ? (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName: string = "";

                                if (route.name === "My Resume") {
                                    iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                                } else {
                                    iconName = "ios-list";
                                }
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: "black",
                            tabBarInactiveTintColor: "gray",
                        })}
                    >
                        <Tab.Screen name="My Resume" component={HomeScreen} />
                        <Tab.Screen name="Details" component={Details} />
                    </Tab.Navigator>
                ) : (
                    <Stack.Navigator>
                        <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </>
    );
}
