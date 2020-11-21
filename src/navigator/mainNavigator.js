import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial176900Navigator from '../features/Tutorial176900/navigator';
import NotificationList176872Navigator from '../features/NotificationList176872/navigator';
import Settings176871Navigator from '../features/Settings176871/navigator';
import Settings176863Navigator from '../features/Settings176863/navigator';
import UserProfile176861Navigator from '../features/UserProfile176861/navigator';
import BlankScreen71176839Navigator from '../features/BlankScreen71176839/navigator';
import UserProfile176829Navigator from '../features/UserProfile176829/navigator';
import Tutorial176828Navigator from '../features/Tutorial176828/navigator';
import NotificationList176800Navigator from '../features/NotificationList176800/navigator';
import Settings176799Navigator from '../features/Settings176799/navigator';
import Settings176791Navigator from '../features/Settings176791/navigator';
import UserProfile176789Navigator from '../features/UserProfile176789/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial176900: { screen: Tutorial176900Navigator },
NotificationList176872: { screen: NotificationList176872Navigator },
Settings176871: { screen: Settings176871Navigator },
Settings176863: { screen: Settings176863Navigator },
UserProfile176861: { screen: UserProfile176861Navigator },
BlankScreen71176839: { screen: BlankScreen71176839Navigator },
UserProfile176829: { screen: UserProfile176829Navigator },
Tutorial176828: { screen: Tutorial176828Navigator },
NotificationList176800: { screen: NotificationList176800Navigator },
Settings176799: { screen: Settings176799Navigator },
Settings176791: { screen: Settings176791Navigator },
UserProfile176789: { screen: UserProfile176789Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
