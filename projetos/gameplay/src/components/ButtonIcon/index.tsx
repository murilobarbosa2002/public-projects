import { View, Text, Image, TouchableOpacity, TouchableOpacityProps  } from "react-native"
import DiscordImg from '../../assets/discord.png'
import { styles } from './style'
type props = TouchableOpacityProps & {
    title: string,
}
export function ButtonIcon({ title, ...rest } : props){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.discordIcon} />
            </View>
            <Text style={styles.title}> { title } </Text>
        </TouchableOpacity>
    )
}