import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import React from 'React';
import { Platform } from 'react-native'
import colors from '../assets/colors'
import HomeScreen from '../screens/Watchman/HomeScreen'
import SearchScreen from '../screens/Watchman/SearchScreen'
import ViewProfileScreen from '../screens/Watchman/ViewProfileScreen'
import RequestVisitorScreen from '../screens/Watchman/RequestVisitorScreen';
import UserProfileScreen from '../screens/Watchman/UserProfileScreen'

const WatchmanNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen,
    },
    Search:{
        screen:SearchScreen,
        navigationOptions:{
            header:null
        }
        
    },
    ViewProfile:{
        screen:ViewProfileScreen,
    },
    RequestVisitor:{
        screen:RequestVisitorScreen,
    },
    UserProfile:{
        screen:UserProfileScreen
    }
},
{   initialRouteName:'RequestVisitor',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    }
}
);

export default createAppContainer(WatchmanNavigator);