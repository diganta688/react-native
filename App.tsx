import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Reels from "./src/screens/Reels";
import Search from "./src/screens/Search";
import "./global.css";
import Dashboard from "./src/screens/Dashboard";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: 80,
        },
        tabBarActiveTintColor: "#008069",
        tabBarInactiveTintColor: "#667781",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center w-16 h-8 rounded-full ${
                focused ? "bg-green-100" : "bg-transparent"
              }`}
            >
              <Feather
                name="home"
                size={22}
                color={focused ? "#008069" : "#667781"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center w-16 h-8 rounded-full ${
                focused ? "bg-green-100" : "bg-transparent"
              }`}
            >
              <AntDesign
                name="dashboard"
                size={22}
                color={focused ? "#008069" : "#667781"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center w-16 h-8 rounded-full ${
                focused ? "bg-green-100" : "bg-transparent"
              }`}
            >
              <Feather
                name="video"
                size={20}
                color={focused ? "#008069" : "#667781"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center w-16 h-8 rounded-full ${
                focused ? "bg-green-100" : "bg-transparent"
              }`}
            >
              <Feather
                name="search"
                size={20}
                color={focused ? "#008069" : "#667781"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center w-16 h-8 rounded-full ${
                focused ? "bg-green-100" : "bg-transparent"
              }`}
            >
              <Feather
                name="user"
                size={20}
                color={focused ? "#008069" : "#667781"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const MyStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="MainTabs"
//         component={MyTabs}
//         options={{
//           headerShown: false,
//         }}
//       />

//       <Stack.Screen
//         name="ProfileDetails"
//         component={Profile}
//         options={{
//           title: "Profile",
//         }}
//       />
//     </Stack.Navigator>
//   );
// };


// const MyDrawer = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="Main"
//         component={MyStack}
//         options={{
//           title: "Home",
//         }}
//       />

//       <Drawer.Screen
//         name="Profile"
//         component={Profile}
//       />
//     </Drawer.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
