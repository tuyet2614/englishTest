import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../Views/Dashboard";
import Search from "../Views/Search";
import MyWord from "../Views/MyWord";
import { View, Image, Text } from "react-native";


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >

            <Tab.Screen
                name="Home"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require("../component/images/home.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }} />

                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>HOME</Text>
                        </View>

                    )
                }} />


            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require("../component/images/search.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }} />

                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>SEARCH</Text>
                        </View>

                    )
                }} />

            <Tab.Screen
                name="My Word"
                component={MyWord}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require("../component/images/folder.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }} />

                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>MY WORD</Text>
                        </View>

                    )
                }} />
        </Tab.Navigator>
    )
}

export default Tabs
