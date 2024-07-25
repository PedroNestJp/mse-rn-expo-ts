// Fontes
import { StyleSheet } from "react-native"
import { Colors } from "./Colors"

export const fontFamilyDefault = {
    regular: 'Montserrat_400Regular',
    medium: 'Montserrat_500Medium',
    semiBold: 'Montserrat_600SemiBold',
    bold: 'Montserrat_700Bold',
}

export const FontSize = {
    smalest: 8,
    smal: 14,
    medium: 16,
    big: 18,
    bigest: 24,
  }

export const titleBlack = StyleSheet.create({
    
    fontSize: {
        fontSize:FontSize.big
    },
    color: {
        color:Colors.textBlack
    },
})

export const textGray500 = {
    fontFamilyDefault:fontFamilyDefault.medium,
    fontSize: FontSize.big,
    color: Colors.Cinza500,
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontFamily:fontFamilyDefault.bold,
        color: Colors.textBlack
    },
})