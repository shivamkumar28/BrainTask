import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationConfig from '../../config/navigation-config';
import { Screens } from '../../constant';
import Home from '../../modules/app/screens/home';
import EditDetials from '../../modules/app/screens/edit-details';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={NavigationConfig}
            initialRouteName={Screens.home}>
            <Stack.Screen name={Screens.home} component={Home} />
            <Stack.Screen name={Screens.editDetails} component={EditDetials} />
        </Stack.Navigator>
    );
};

export default AppStack;
