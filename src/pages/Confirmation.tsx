import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Confirmation() {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>

        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas {'\n'} plantinhas com muito
          cuidado.
        </Text>

        <View style={styles.footer}>
          <Button
            title="Começar"
            onPress={() => navigation.navigate('PlantSelect')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 78,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 32,
    marginTop: 64
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 14,
    paddingVertical: 10,
    color: colors.body_dark
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 40
  }
})
