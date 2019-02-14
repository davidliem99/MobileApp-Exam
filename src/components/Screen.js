import React from 'react';
import { createBottomTabNavigator, createAppContainer ,TabNavigator } from 'react-navigation';
import Timeline from './Timeline'
import Profile from './Profile';
import Post from './Post';
import {Icon} from 'react-native-elements'

export default createBottomTabNavigator({
    Timeline: {
        screen:Timeline,
        navigationOptions:{
            tabBarLabel:"Timeline",
            tabBarIcon: ({tintColor}) => <Icon name='home' color={tintColor} size={35}/>,
        },
    },
    Post: {
        screen:Post,
        navigationOptions:{
            // tabBarLabel:"Timeline",
            tabBarIcon: ({tintColor}) => <Icon name='add-box' color={tintColor} size={35}/>,
        },
    },
    Profile: {
      screen:Profile,
        navigationOptions:{
            tabBarLabel:"Profile",
            tabBarIcon: ({tintColor}) => <Icon name='account-circle' color={tintColor} size={35}/>,
        },
    }
});

