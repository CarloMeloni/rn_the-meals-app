import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';//npm install --save react-navigation-tabs, import { createTabsNavigator } from 'react-navigation-tabs'; npm install --save react-navigation-drawer, import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
       backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
   },
   headerTitleStyle: {
       fontFamily: 'open-sans-bold'
   },
   headerBackTitleStyle: {
    fontFamily: 'open-sans'
   },
       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen, 
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
    }, 
    {
        defaultNavigationOptions: defaultStackNavOptions
    }   
    );

const FavNavigator = createStackNavigator({
        Favorites: FavoriteScreen,
        MealDetail: MealDetailScreen
    }, 
    {
        defaultNavigationOptions: defaultStackNavOptions
    });



const tabScreenConfig = {
        Meals: {screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} /> )
            },
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Meals'
        }},
        Favorite: {screen: FavNavigator, navigationOptions: {
            tabBarLabel: 'FAVOURITE',
            tabBarIcon: (tabInfo) => {
                return( <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} /> )
            },
            tabBarColor: Colors.secundary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily:'open-sans-bold'}}>Meals</Text> : 'Favourites'
        }
    }
    };


    const MealsFavTabNavigator = 
        Platform.OS === 'android'
            ? createMaterialBottomTabNavigator(tabScreenConfig,
                {
                    activeTintColor: 'white',
                    shifting: true,
                    barStyle: {
                        backgroundColor: Colors.primary
                    }
                }
            ) 
            : createBottomTabNavigator(tabScreenConfig,
                {
                    tabBarOptions: {
                        labelStyle: {
                            fontFamily: 'open-sans'
                        },
                        activeTintColor: Colors.secundary
                    }
                }
            );

    const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
    },
    {
     //   navigationOptions: {
      //      drawerLabel: 'Filtrane!!!!'
      //  },
        defaultNavigationOptions: defaultStackNavOptions
    } )

    const MainNavigator = createDrawerNavigator({
        MealsFav: {screen: MealsFavTabNavigator, navigationOptions: {
            drawerLabel: 'Meals'
        }},
        Filters: FiltersNavigator
    }, {
        contentOptions: {
            activeTintColor: Colors.secundary,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    });
        

export default createAppContainer(MainNavigator);