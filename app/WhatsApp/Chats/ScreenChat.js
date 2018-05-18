import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Text, Right, Thumbnail, Item, Input} from 'native-base';
import {} from 'react-native-ui-kitten'

export default class ScreenChat extends Component {

    render(){
        return(
          <Container style={{backgroundColor:"#ffffff"}}>
            <Header style={{backgroundColor: "#075e54", flexDirection: "row"}}>
              <Left style={{flexDirection: "row"}}>
                <Button transparent onPress={()=>this.props.navigation.navigate("Main")}>
                  <Icon name="arrow-back"/>
                </Button>
                <Thumbnail source={require("../Image/person.jpg")} style={{width: 40, height: 40, marginTop:2}}/>
              </Left>
              <Body style={{left: 25}}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>Aliatuzzulfa</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="video-call" type="MaterialIcons"/>
                </Button>
                <Button transparent>
                  <Icon name="call" type="MaterialIcons"/>
                </Button>
                <Button transparent>
                  <Icon name="more"/>
                </Button>
              </Right>
            </Header>
            <View style={styles.container}>
              <Text style={styles.welcomeTitle}>No message</Text>
            </View>
            <View style={{margin: 10, justifyContent: 'space-evenly', flexDirection:"row", backgroundColor:"#ffffff"}}>
              <Item rounded style={{width: 275}}>
                <Input placeholder='Type message here'/>
              </Item>
              <Button rounded success style={{top:3}}>
                <Icon name="md-send" type="Ionicons"/>
              </Button>
            </View>
          </Container>
        );
      }
    
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
        welcomeTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});