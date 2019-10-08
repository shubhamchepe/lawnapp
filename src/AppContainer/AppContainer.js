import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen/ForgotPassScreen';


const AppContainer = createStackNavigator({
    Splashscreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        header:null
      }
    },
    Loginscreen: {
      screen: LoginScreen,
      navigationOptions: {
        header:null
      }
    },
    Registerscreen: {
        screen: RegisterScreen,
        navigationOptions: {
          header:null
        }
      },
      Frogotscreen: {
        screen: ForgotPassScreen,
        navigationOptions: {
          header:null
        }
      },
  },{initialRouteName:'Splashscreen'});
  
  export default createAppContainer(AppContainer);