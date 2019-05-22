import { createStackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';

const AppNavigator = createStackNavigator({
  MainPage: {screen: MainPage},
  Login: { screen: LoginPage},
});
