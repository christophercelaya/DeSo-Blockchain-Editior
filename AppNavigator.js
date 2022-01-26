import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import HomepageGridScreen from './screens/HomepageGridScreen';
import ListofCoinsScreen from './screens/ListofCoinsScreen';
import SimpleWelcomeScreen from './screens/SimpleWelcomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ textAlign: 'center' }}>
        Your navigator is missing screens! Add some from the navigators tab on
        the left.
      </Text>
    </View>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerBackTitle: ' ',
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false, title: 'Welcome' }}
        />
        <Stack.Screen
          name="ListofCoinsScreen"
          component={ListofCoinsScreen}
          options={{ title: 'List of Coins' }}
        />
        <Stack.Screen
          name="HomepageGridScreen"
          component={HomepageGridScreen}
          options={{ title: 'Homepage - Grid' }}
        />
        <Stack.Screen
          name="SimpleWelcomeScreen"
          component={SimpleWelcomeScreen}
          options={{ title: 'Simple Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
