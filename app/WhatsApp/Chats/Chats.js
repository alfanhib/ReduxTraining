import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Content, List, ListItem, Left, Thumbnail, Body,Right, Icon} from 'native-base';
import { RkText } from 'react-native-ui-kitten';

export default class ListChats extends Component{

  render(){
    return(
        <Content>
        <List>
          
          <ListItem avatar style={{paddingTop: 10, paddingBottom: 10}} onPress={()=>this.props.navigation.navigate("ChatScreen")}>
            <Left>
              <Thumbnail source={require("../Image/person.jpg")}/>
            </Left>
            <Body>
              <RkText style={{fontWeight:"bold"}}>Alfan Hibban</RkText>
              <RkText note>Haloo Broo</RkText>
            </Body>
            <Right>
              <Icon name='eye'/>
            </Right>
          </ListItem>

        </List>
      </Content>
    );
  }

}
