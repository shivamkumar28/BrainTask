import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationConfig from '../../config/navigation-config';
import { Screens } from '../../constant';
import Home from '../../modules/app/screens/home';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={NavigationConfig}
            initialRouteName={Screens.home}>
            <Stack.Screen name={Screens.home} component={Home} />
        </Stack.Navigator>
    );
};

export default AppStack;
