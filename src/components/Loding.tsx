import { View, ActivityIndicator } from "react-native";
import { Align } from "../Styles/colors/Align";
import { Colors } from "../Styles/colors/Colors";


export function Loading() {
    return (
        <View style={Align.Center}>
            <ActivityIndicator color={Colors.textWhite} />
        </View>
    )
} 