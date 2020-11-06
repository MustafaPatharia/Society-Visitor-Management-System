import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import SecretaryHomeScreen from '../screens/Secretary/SecretaryHomeScreen';
import HomeScreen from '../screens/Resident/HomeScreen';
import CallScreen from '../screens/Resident/CallScreen'
import NotificationScreen from '../screens/Resident/NotificationScreen';
import NoticeScreen from '../screens/Resident/NoticeScreen'


const SecretaryNavigator = createBottomTabNavigator({
    
    Secretary:SecretaryHomeScreen,
    Home:HomeScreen,
    Call:CallScreen,
    Notification:NotificationScreen,
    Notice:NoticeScreen

},
{initialRouteName:'Home'}
);


export default createAppContainer(SecretaryNavigator);