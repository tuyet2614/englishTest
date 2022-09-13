import React, { useState, useEffect } from "react";
import { Text, FlatList, View, SafeAreaView } from "react-native";
import Tabs from "./src/navigation/tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import styles from "./src/component/Style";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListWord from "./src/Views/ListWord";
import DetailVocab from "./src/Views/DetailVocab";
import Practice from "./src/Views/Practice";
import AddFolder from "./src/Views/AddFolder";
import MyVocabulary from "./src/Views/MyVocabulary";


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
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="AddFolder" component={AddFolder} />
        <Stack.Screen name="MyVocabulary" component={MyVocabulary} />

      </Stack.Navigator>

    </NavigationContainer>


  );
}


export default App