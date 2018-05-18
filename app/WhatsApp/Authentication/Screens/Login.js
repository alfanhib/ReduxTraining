import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import { RkText, RkTextInput, RkButton } from 'react-native-ui-kitten'
import Modal from 'react-native-modal'

export default class Login extends Component {

    state={
        visibleModal: false
    }

    render() {
        return (
        <View>
            <View style={styles.container}>
                <RkText style={styles.txtHeader}>Verifikasi nomor Anda</RkText>
                <RkText style={styles.txtContent}>
                    WhatsApp Akan mengirim pesan SMS untuk memverifikasikan nomor telepon Anda. 
                    Masukan kode negara dan nomor telepon:
                </RkText>
            </View>
            <View style={styles.content}>    
                <RkTextInput placeholder="Country" value="Indonesia"/>
                <RkTextInput label="+" placeholder="Masukan Nomor Anda"/>
            </View>
            <View style={styles.footer}>
                <RkButton rkType='success' onPress={()=>this.props.navigation.navigate("Main")}>Masuk</RkButton>
                <RkText style={styles.txtFooter}>Biaya SMS operator telepon mungkin berlaku</RkText>
            </View>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    content:{
        marginHorizontal: 30,
    },
    footer:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 250,
    },
    txtHeader:{
        marginTop: 15,
        fontSize: 20, 
        fontWeight: "bold",
    },
    txtContent:{
        fontSize:13,
        color:'#9ca2ad',
        marginTop:15,
        textAlign:"center"
    },
    txtFooter:{
        fontSize: 10,
        color:'#9ca2ad'
    }
})