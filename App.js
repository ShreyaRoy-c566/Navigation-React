import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Image from './logo.png';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Drawer from 'react-native-circle-drawer'


function Home({ navigation })
 {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
       color="#e91e63"
       
        title="Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button
      color="#e91e63"
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
      color="#e91e63"
        title="Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
function Settings({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'bottom' }}>
      <Text>Settings</Text>
      
      <Button
      color="#e91e63"
        title="Back"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
      color="#e91e63"
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Notifications({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button
      color="#e91e63"
        title="Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


function Profile({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile Screen <br/>
     
              19BCE1779<br/>
              Shreya Priyadrshni Roy 
      
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
             else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }
             else if (route.name === 'Profile') {
              iconName = focused ? 'ios-happy' : 'ios-happy-outline';
            }
           
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notifications" component={Notifications} />
         <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Profile" component={Profile} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

