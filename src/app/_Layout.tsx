import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../src/components/Header';
import { Colors } from '../../src/Styles/colors/Colors';
import { Home } from '../../src/app/index';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import { Loading } from '../../src/components/Loding';

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!fontsLoaded && !fontError) {
        return <Loading />
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <Home />
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 32,
        backgroundColor: Colors.Cinza100
    },

});
