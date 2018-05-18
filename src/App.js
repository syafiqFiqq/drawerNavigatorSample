import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import InfoScreen from './screens/InfoScreen';

import { Home, Settings, Info } from './screenNames';

var { width, height } = Dimensions.get('window');

let routeConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Info: {
    screen: InfoScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}

let drawerNavigatorConfig = {
  initialRouteName: Home,
  drawerWidth: width / 1.5,
  drawerPosition: 'left',
  drawerBackgroundColor: '#682f50',
  contentOptions: {
    inactiveTintColor: 'white',
    activeTintColor: '#ab567f',
    // labelStyle: {
    //   color: 'white',
    //   //activeTintColor: 'orange',
    // }
  },
  order: [Home, Settings, Info]
}

const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
export default App;