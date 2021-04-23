import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import AvatarImg from '../assets/Avatar.png'

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Pedro</Text>
      </View>

      <Image source={AvatarImg} style={styles.avatar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})
