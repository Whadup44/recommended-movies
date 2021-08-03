import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home.js'
import RecommendedMoviesScreen from './screens/Recommended.js'
import PopularMoviesScreen from './screens/Popular.js'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <AppContainer/>
  );
}

const AppTopTabNavigation = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: RecommendedMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: {
          backgroundColor: "#fff"
        },
        labelStyle: {
          color: "#000"
        },
        indicatorStyle: {
          backgroundColor: "#000"
        }
      }
    }
  },
  PopularMovies: {
    screen: PopularMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: {
          backgroundColor: "#fff"
        },
        labelStyle: {
          color: "#000"
        },
        indicatorStyle: {
          backgroundColor: "#000"
        }
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  AppTopNav: {
    screen: AppTopTabNavigation,
    navigationOptions: {
      headerTitle: "Recommended Movies",
      headerBackTitle: null,
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#d500f9"
      },
      headerTitleStyle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: RFValue(18)
      }
    }
  }
},
{initalRouteName: "home"})

const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
