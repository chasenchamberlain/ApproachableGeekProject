import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Profile from './components/Profile'
import EditProfilePic from './components/EditProfilePic'
import EditName from './components/EditName'
import EditPhone from './components/EditPhone'
import EditEmail from './components/EditEmail'
import EditBio from './components/EditBio'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Profile">
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} initialParams={{ firstP: "", lastP: "", phoneP: "", emailP: "", bioP: "", linkP: "" }} />
        <Stack.Screen name="Upload a photo" component={EditProfilePic} />
        <Stack.Screen name="Name" component={EditName} />
        <Stack.Screen name="Phone" component={EditPhone} />
        <Stack.Screen name="Email" component={EditEmail} />
        <Stack.Screen name="Bio" component={EditBio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
