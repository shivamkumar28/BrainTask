import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NavigationConfig from "../config/navigation-config"
import { Routes } from "../constant"
import AuthStack from "./auth-stack"
import AppStack from "./app-stack"

const Stack = createNativeStackNavigator()

const InitialNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={NavigationConfig}>
            <Stack.Screen name={Routes.authStack} component={AuthStack} />
            <Stack.Screen name={Routes.appStack} component={AppStack} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default InitialNavigation