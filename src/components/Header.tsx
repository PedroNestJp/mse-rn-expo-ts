import React from 'react';
import { View, Pressable, StyleSheet, Image } from 'react-native';
import { BellSimple, List, ArrowsCounterClockwise } from 'phosphor-react-native';
import { Colors } from '../Styles/colors/Colors';

export function Header() {
  return (
    <View style={styles.container}>
      <Pressable>
        <List size={30} color={Colors.verdePrincipal} weight="bold" />
      </Pressable>
      <View style={styles.contentIcons}>
        <Pressable style={styles.fundoCards}>
          <BellSimple size={30} color={Colors.verdePrincipal} />
        </Pressable>
        <Pressable style={styles.fundoCards}>
          <Image source={require('../../assets/icon-brasil.png')} width={30} />
        </Pressable>
        <Pressable style={styles.fundoCards}>
          <ArrowsCounterClockwise size={30} color={Colors.verdePrincipal} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  fundoCards: {
    backgroundColor: '#74C299',
    borderRadius: 50,
    padding: 8,
  },
  contentIcons: {
    flexDirection: 'row',
    gap: 8,
  },
});
