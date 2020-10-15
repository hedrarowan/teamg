import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Shapes from "../components/Shapes";
import ShapesAnswer from "../components/ShapesAnswer";
import Subjects from "../components/Subjects";
import ColorSortGame from "../components/ColorSortGame";
import UserStats_PT from "../components/UserStats_PT";
import UserStats_Student from "../components/UserStats_Student";

const Stack = createStackNavigator();

function SubjectsNav({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Subjects"
        component={Subjects}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shapes"
        component={Shapes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ColorSortGame"
        component={ColorSortGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShapesAnswer"
        component={ShapesAnswer}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="UserStats_PT"
        component={UserStats_PT}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserStats_Student"
        component={UserStats_Student}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default SubjectsNav;