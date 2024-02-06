import { Text, View } from "react-native"
import { styles } from "./style"
import { CustomButton, CustomInput } from "../../../../components"
import { useState } from "react"
import { Routes } from "../../../../constant"

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onLogin = () => {
        navigation.navigate(Routes.appStack)
    }

    return <View style={styles.container} >
        <Text style={styles.heading}>{'Firebase Login'}</Text>
        <CustomInput label={'Email'} value={email} onChangeText={(val) => setEmail(val)} placeholder={'Enter email'} />
        <CustomInput label={'Password'} value={password} onChangeText={(val) => setPassword(val)} placeholder={'Enter password'} />
        <CustomButton title={'Submit'} onPress={onLogin} />
    </View>
}

export default Login