import React from 'react'
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { useRoute } from '@react-navigation/core'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import waterdropImg from '../assets/waterdrop.png'

interface Params {
  plant: {
    id: string
    name: string
    about: string
    water_tips: string
    photo: string
    environments: [string]
    frequency: {
      times: number
      repeat_every: string
    }
  }
}

export function PlantSave() {
  const route = useRoute()

  const { plant } = route.params as Params

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />

        <Text style={styles.plantName}>{plant.name}</Text>

        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdropImg} style={styles.tipImage} />

          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado
        </Text>

        <Button title="Cadastrar Planta" onPress={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 32
  },
  plantAbout: {
    fontFamily: fonts.text,
    fontSize: 17,
    color: colors.body_dark,
    marginTop: 16,
    textAlign: 'center'
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 16,
    borderRadius: 20,
    position: 'relative',
    bottom: 65
  },
  tipImage: {
    height: 56,
    width: 56
  },
  tipText: {
    flex: 1,
    marginLeft: 24,
    fontFamily: fonts.text,
    fontSize: 15,
    color: colors.blue,
    textAlign: 'justify'
  },
  alertLabel: {
    fontFamily: fonts.complement,
    color: colors.body_dark,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16
  }
})
