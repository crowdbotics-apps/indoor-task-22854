import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
