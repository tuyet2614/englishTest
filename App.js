import React, { useState } from "react";
import { Text, FlatList, View, SafeAreaView } from "react-native";
import Tabs from "./navigation/tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import styles from "./component/Style";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListWord from "./Views/ListWord";
import Dashboard from "./Views/Dashboard";
import DetailVocab from "./Views/DetailVocab";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vocabulary"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ListWord" component={ListWord} />
        <Stack.Screen name="DetailWord" component={DetailVocab} />

      </Stack.Navigator>

    </NavigationContainer>


  );
}


export default App