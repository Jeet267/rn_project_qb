import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CompanyScreen from './screens/CompanyScreen';
import Footer from './screens/Footer'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Home Page' }}
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: 'Login' }}
          />
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={{ title: 'Signup' }}
          />
          <Stack.Screen 
            name="Company" 
            component={CompanyScreen} 
            options={({ route }) => ({ title: route.params.companyName })}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* ✅ Add Footer at the bottom */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
