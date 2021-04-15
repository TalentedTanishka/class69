import * as React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';


export default class SearchScreen extends React.Component
{
  render()
  {
    return(
<View>
     
      <Text style={{fontSize:30}}>Search for a book or a student</Text>
</View>
      
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
}
)