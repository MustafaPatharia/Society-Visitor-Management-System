import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import AdminNavigator from './AdminNavigator';
import SecretaryNavigator from './SecretaryNavigator';
import ResidentNavigator from './ResidentNavigator';
import WatchmanNavigator from './WatchmanNavigator'



const RootNavigator = createSwitchNavigator({
    Login : LoginScreen,
    Admin : AdminNavigator,
    Resident : ResidentNavigator,
    Secretary : SecretaryNavigator,
    Watchman: WatchmanNavigator,
},
{ initialRouteName : 'Resident' }
)

export default createAppContainer(RootNavigator) ;