import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScannner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component
{
constructor ()
{
  super()
  this.state={
    hascamerapermissions : null,
    scanned : false,
    scannedData : '',
    buttonstate : "normul"
  }
}
  getCameraPermission=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hascamerapermissions: status==='granted',
      buttonstate:"clicked",
      scanned:false
    })
  }

  handleBarCodeScanner=async({type,data})=>{
this.setState({scanned:true , scannedData : data , buttonstate : "normul"})
  }
  

  render()
  
  {
    const hascamerapermissions = this.state.hascamerapermissions 
    const scanned = this.state.scanned
    const buttonstate = this.state.buttonstate
    if(buttonstate === "clicked" && hascamerapermissions){
      return(
        <BarCodeScannner onBarCodeScanned={scanned?undefined:this.handleBarCodeScanner} style={StyleSheet.absoluteFillObject}></BarCodeScannner>
      )
    }
    else
    {

   
    return(
      <View style={styles.container}>
        <Text>
          {hascamerapermissions === true? this.state.scannedData : "request camera permission"}
        </Text>
<TouchableOpacity style={styles.scanButton} onPress={this.getCameraPermission}>
  <Text style={styles.buttonText}>
    SCAN QR CODE
  </Text>
</TouchableOpacity>
      </View>
     
     
    )
    }
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex : 1 , 
    justifyContent : "center",
    alignItems:"center"
  },
  displayText:
  {
    fontSize:30,
    textDecorationLine:"underline"
  },
  scanButton:
  {
    backgroundColor:"yellow",
    margin:10,
    padding:10
  },
  buttonText:
  {
    fontSize:20
  }

})