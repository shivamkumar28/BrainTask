import { FlatList, View } from "react-native"
import { styles } from "./style"
import { FloatingButton } from "../../../../components"
import { Screens } from "../../../../constant"

const Home = ({ navigation }: any) => {

    const onAdd = () => {
        navigation.navigate(Screens.editDetails)
    }

    const renderList = ({ item, index }: any) => {
        return <View></View>
    }

    return <View style={styles.container}>
        <FlatList data={[1, 2, 3, 4, 5, 6, 7]} renderItem={renderList} />
        <FloatingButton onPress={onAdd} />
    </View>
}

export default Home