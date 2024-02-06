import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationConfig from '../../config/navigation-config';
import Login from '../../modules/auth/screens/login';
import { Screens } from '../../constant';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={NavigationConfig}
            initialRouteName={Screens.login}>
            <Stack.Screen name={Screens.login} component={Login} />
        </Stack.Navigator>
    );
};

export default AuthStack;
