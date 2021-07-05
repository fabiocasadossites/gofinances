import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.secondary,
        inactiveTintColor: theme.colors.text,
        labelPosition: "beside-icon",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              name="format-list-bulleted"
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="attach-money" color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} name="pie-chart" color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
