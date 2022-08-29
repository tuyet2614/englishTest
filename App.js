import React from "react";
import { Text, FlatList, View, SafeAreaView } from "react-native";
import Tabs from "./navigation/tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import styles from "./component/Style";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListWord from "./Views/ListWord";
import Dashboard from "./Views/Dashboard";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Listword" component={ListWord} />


      </Stack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>


  );
}


export default App