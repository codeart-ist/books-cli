import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/auth/Login'
import { useState } from 'react';
import { useEffect } from 'react';
import Register from './src/auth/Register';
import Home from './src/dashboard/Home'
import Search from './src/dashboard/Search'
import NewReview from './src/dashboard/NewReview'
import ReviewList from './src/dashboard/ReviewList'
import Profile from './src/dashboard/Profile'
import { Ionicons } from '@expo/vector-icons'
import i18n from './src/config/i18n';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const initialRoute = () => {
    // token  kontrolü
    return 'Login'
  }

  const {t} = i18n

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
          <Stack.Screen name={t('login.headerTitle')} component={Login} />
          <Stack.Screen name={t('dashboard.homepage')} component={MainTabNavigator} />
          <Stack.Screen name={t('register.headerTitle')} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#384F7D',
        inactiveTintColor: '#A5B0C4',
        style: {
          backgroundColor: '#ffffff'
        }
      }}
    >
      <Tab.Screen name={i18n.t('dashboard.homepage')} component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'ios-home'} color={color} size={size} />
          ),
        }} />
      <Tab.Screen name={i18n.t('dashboard.search')} component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'search-outline'} color={color} size={size} />
          ),
        }} />
      <Tab.Screen name={i18n.t('dashboard.new')} component={NewReview}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'add-outline'} color={color} size={size} />
          ),
        }} />
        <Tab.Screen name={i18n.t('dashboard.reviews')} component={ReviewList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'bulb-outline'} color={color} size={size} />
          ),
        }} />
        <Tab.Screen name={i18n.t('dashboard.profile')} component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={'person-outline'} color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
