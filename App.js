import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/transactionScreen';
import SearchScreen from './screens/searchScreen';
import{createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component
{
  render()
  {
    return(
<AppNavigator/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var TabNavigator = createBottomTabNavigator({
  Search : {screen:SearchScreen},
  Transaction : {screen:TransactionScreen}
  
})

const AppNavigator = createAppContainer(TabNavigator)

