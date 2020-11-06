import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'React';
import { Platform } from 'react-native'
import { Ionicons , Entypo } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Resident/HomeScreen';
import CallScreen from '../screens/Resident/CallScreen'
import NotificationScreen from '../screens/Resident/NotificationScreen';
import ViewProfileScreen from '../screens/Resident/ViewProfileScreen'
import NoticeScreen from '../screens/Resident/NoticeScreen'
import AddVisitorScreen from '../screens/Resident/AddVisitorScreen'
import colors from '../assets/colors'
import { createStackNavigator } from 'react-navigation-stack';
import UserProfileScreen from '../screens/Resident/UserProfileScreen'

const ResidentHomeNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen,
    },
    ViewProfile:{
        screen:ViewProfileScreen,
    },
    AddVisitor:AddVisitorScreen,
    UserProfile:UserProfileScreen,
},
{   
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    }
})
const ResidentCallNavigator = createStackNavigator({
    Call:{  
        screen: CallScreen, 
        navigationOptions:{
            headerTitle:'Call',
        }
    }
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    }
})
const ResidentNotificationNavigator = createStackNavigator({
    Notification:{
        screen:NotificationScreen, 
        navigationOptions: {
            headerTitle:'Notification',
        }
    }
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    }
})
const ResidentNoticeNavigator = createStackNavigator({
    Notice:{
        screen: NoticeScreen,
        navigationOptions:{
            headerTitle:'Notice',
        }
    }
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    }
})

const ResidentNavigator = createBottomTabNavigator({
    
    Home:{ screen:ResidentHomeNavigator, 
           navigationOptions:{
               tabBarIcon: (tabInfo) => {
                   return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor}/>
               }
            }
        },
    Call:{ screen: ResidentCallNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-call" size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Notification:{ screen: ResidentNotificationNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-notifications" size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Notice:{ screen: ResidentNoticeNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return <Entypo name="message" size={25} color={tabInfo.tintColor}/>
            }
        }
    },
},
{ tabBarOptions : {
    activeTintColor: colors.primaryColor,
    labelStyle:{
        fontWeight:"bold",
    }
    },

},

);


export default createAppContainer(ResidentNavigator);