import React, { Component } from 'react'
import { View, Image, StyleSheet} from 'react-native'
import { RkText, RkButton } from 'react-native-ui-kitten'

export default class Welcome extends Component{

    render() {
      return (
        <View style={styles.container}>
            <RkText style={styles.header}>Selamat Datang Di Whatsapp</RkText>
            <Image source={require('./../image/wa.png')} style={styles.logo}/>
            <RkText style={styles.txtFooter}>Ketuk "Setuju dan lanjutkan" untuk menerima Ketentuan dan Kebijakan Privasi Whatsapp</RkText>
            <RkButton rkType='success' onPress={()=> this.props.navigation.navigate("Login")}>Setuju dan lanjutkan</RkButton>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
		justifyContent: 'center',
		alignItems: 'center',
  },
  header:{
    marginTop: 20,
    fontSize: 20,
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    height: 300,
    resizeMode: "contain",
    width: 300
  },
  txtFooter:{
    textAlign:'center',
    fontSize:13,
    margin: 25,
  }

})