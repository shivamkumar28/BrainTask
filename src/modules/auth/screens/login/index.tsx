import { Keyboard, Text, View } from "react-native"
import { styles } from "./style"
import { CustomButton, CustomInput, Loader } from "../../../../components"
import { useState } from "react"
import { Colors, Routes } from "../../../../constant"
import auth from '@react-native-firebase/auth';
import { showToast } from "../../../../utilities"

const Login = ({ navigation }: any) => {

    const [isLoading, setloading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const checkValue = () => {
        if (email.trim() == '') {
            showToast('Please enter email')
            return false
        }
        if (password.trim() == '') {
            showToast('Please enter password')
            return false
        }
        return true
    }

    const onLogin = () => {
        Keyboard.dismiss()
        if (checkValue()) {
            setloading(true)
            firebaseLogin()
        }
    }

    const firebaseLogin = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                setloading(false)
                showToast('Login Successfully')
                navigation.navigate(Routes.appStack)
            })
            .catch(error => {
                setloading(false)
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    showToast('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    showToast('That email address is invalid!');
                }

                showToast('Something Went Wrong')
            });
    }

    return <View style={styles.container} >
        <Text style={styles.heading}>{'Firebase Login'}</Text>
        <CustomInput label={'Email'} value={email} onChangeText={(val) => setEmail(val)} placeholder={'Enter email'} />
        <CustomInput label={'Password'} value={password} onChangeText={(val) => setPassword(val)} placeholder={'Enter password'} />
        <CustomButton title={'Submit'} onPress={onLogin} />
        {isLoading && <Loader size={'large'} color={Colors.black} />}
    </View>
}

export default Login