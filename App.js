import React from 'react'
import { Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import contactData from './mocks/contact.json'

import Profile1 from './components/Profile1/Profile'
import Profile2 from './components/Profile2/Profile'
import Profile3 from './components/Profile3/SettingsScreenContainer'

import Search from './components/Profile3/Search'

const Profile1Stack = StackNavigator(
  {
    profile: {
      screen: () => <Profile1 {...contactData} />,
      navigationOptions: {
        header: null,
      },
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const Profile2Stack = StackNavigator(
  {
    profile: {
      screen: () => <Profile2 {...contactData} />,
      navigationOptions: {
        header: null,
      },
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const Profile3Stack = StackNavigator(
  {
    profile: {
      screen: () => <Profile3 {...contactData} />,
      navigationOptions: {
        header: <Search title="Settings" />,
      },
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const HomeIcon = ({ focused, tintColor }) => (
  <Icon
    name="circle"
    type="entypo"
    size={26}
    color={focused ? tintColor : 'gray'}
  />
)

const RootTabs = TabNavigator(
  {
    profile1: {
      screen: Profile1Stack,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: HomeIcon,
      },
    },
    profile2: {
      screen: Profile2Stack,
      navigationOptions: {
        tabBarLabel: 'Profile2',
        tabBarIcon: HomeIcon,
      },
    },
    profile3: {
      screen: Profile3Stack,
      navigationOptions: {
        tabBarLabel: 'Profile3',
        tabBarIcon: HomeIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'black' : 'gray',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        width: 30,
        height: 30,
      },
      style: {
        backgroundColor: 'white',
        justifyContent: 'center',
      },
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'profile1',
  }
)

HomeIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
}

export default RootTabs
