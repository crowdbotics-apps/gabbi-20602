import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile106800Navigator from '../features/UserProfile106800/navigator';
import Settings106799Navigator from '../features/Settings106799/navigator';
import Settings106797Navigator from '../features/Settings106797/navigator';
import SignIn2106795Navigator from '../features/SignIn2106795/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile106800: { screen: UserProfile106800Navigator },
Settings106799: { screen: Settings106799Navigator },
Settings106797: { screen: Settings106797Navigator },
SignIn2106795: { screen: SignIn2106795Navigator },

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
