import React from 'react'
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { Welcome } from '../pages/Welcome'
import { UserIdentification } from '../pages/UserIdentification'
import { Confirmation } from '../pages/Confirmation'
import { PlantSelect } from '../pages/plantSelect'

import colors from '../styles/colors'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    />
    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    />
    <stackRoutes.Screen
      name="PlantSelect"
      component={PlantSelect}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
      }}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes
