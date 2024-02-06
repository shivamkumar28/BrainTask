import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { styles } from "./style"
import { CustomButton, CustomInput, RadioButton } from "../../../../components"

const EditDetials = ({ navigation, route }: any) => {
    const [heading, setHeading] = useState('Create Todos')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [priority, setPriority] = useState('')
    const [btnText, setBtnText] = useState('Add')

    const onAdd = () => {

    }

    const priorityLevels = () => {
        return <View style={{ width: '100%' }}>
            <Text style={styles.label}>{'Select Priority Level'}</Text>
            <RadioButton title={'Low'} isSelected={priority == 'low'} onPress={() => setPriority('low')} />
            <RadioButton title={'Medium'} isSelected={priority == 'medium'} onPress={() => setPriority('medium')} />
            <RadioButton title={'High'} isSelected={priority == 'high'} onPress={() => setPriority('high')} />
        </View>
    }

    return <View style={styles.container}>
        <Text style={styles.heading}>{heading}</Text>
        <CustomInput label={'Title'} value={title} onChangeText={(val) => setTitle(val)} placeholder={'Enter title'} />
        <CustomInput label={'Description'} value={title} onChangeText={(val) => setDesc(val)} placeholder={'Enter description'} />
        {priorityLevels()}

        <View style={styles.btnView}>
            <CustomButton title={'Cancel'} onPress={onAdd} style={styles.btn} />
            <CustomButton title={btnText} onPress={onAdd} style={styles.btn} />

        </View>
    </View>
}

export default EditDetials;
