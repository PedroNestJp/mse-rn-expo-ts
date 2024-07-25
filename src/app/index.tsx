import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { FontSize, fontFamilyDefault, textGray500 } from "../Styles/colors/Fonts";
import { Colors } from "../Styles/colors/Colors";
import { Align } from "@/Styles/colors/Align";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Olá, <Text style={styles.alternativeTitle} >User!✌️</Text>
            </Text>
            <Text style={styles.subTitle}>
                Você está acessando à plataforma com conteúdos sobre malária
            </Text>

            <View style={styles.AboutMalaria} >
                <Text style={styles.aboutMalariaTitle}>
                    O que é o chega de malária?
                </Text>
                <ImageBackground style={[styles.containerVideo, Align.Center]} source={require('@/assets/malaria.png')} >
                    <Image style={styles.iconPlayVideo} source={require('../../assets/PlayCircle.png')} />
                </ImageBackground>

                <View style={styles.aboutMalariaText}>
                    <Text>Em um esforço para combater a malária, apresentamos o projeto "Chega de Malária", uma iniciativa educacional que visa fornecer conhecimento valioso sobre essa doença globalmente impactante.</Text>
                    <Text>As videoaulas, conduzidas por especialistas, oferecem uma visão abrangente dos aspectos biológicos, epidemiológicos e sociais da malária, tornando a aprendizagem envolvente e significativa.</Text>
                    <Text style={styles.title}> 
                        Assista ao vídeo sobre o projeto "Chega de Malária" acima:
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontFamily: fontFamilyDefault.bold,
        color: Colors.textBlack
    },
    AboutMalaria: {
        backgroundColor:"#ffffff",
        gap:16,
        flexDirection:'column',
        borderRadius:8,
        marginTop:48
    },
    aboutMalariaTitle:{
        fontFamily: fontFamilyDefault.semiBold,
        marginTop:16,
        marginLeft:16
    },
    alternativeTitle: {
        fontSize: FontSize.medium,
        color: Colors.rosaPrincipal
    },
    subTitle: {
        fontSize: FontSize.medium
    },
    containerVideo:{
        height: 270

    },
    iconPlayVideo:{
        height: 65,
        width: 65,
    },
    aboutMalariaText:{
        padding:16,
        gap:16,
        flexDirection:'column'
    }
})