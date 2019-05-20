import { createStackNavigator } from 'react-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Index: { screen: Index },
  Search: { screen: Search},
  Login: { screen: Login},
});

export default AppNavigator;