import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AdminHomeScreen from '../screens/Admin/AdminHomeScreen';
import AddSocietyScreen from '../screens/Admin/AddSocietyScreen';
import ViewSocietyScreen from '../screens/Admin/ViewSocietyScreen';
import AddSecretaryScreen from '../screens/Admin/AddSecretaryScreen';

const AdminNavigator = createStackNavigator({
    
    AdminHome: AdminHomeScreen,
    AddSociety:AddSocietyScreen,
    AddSecretary: AddSecretaryScreen,
    ViewSociety: ViewSocietyScreen,

},
{initialRouteName:'AdminHome'}
);


export default createAppContainer(AdminNavigator);