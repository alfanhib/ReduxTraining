import React, { Component } from 'react';
import { 
  Container, Content, Text,
  List, ListItem, Icon, Fab, View, Left, Body, Right, Thumbnail
} from 'native-base';

export default class ListContact extends Component{

  render(){
    return(
      <Content>
        <List>
          
          <ListItem avatar style={{paddingTop: 10, paddingBottom: 10}}>
            <Left>
              <Thumbnail source={require("../../Image/person.jpg")}/>
            </Left>
            <Body>
              <Text style={{fontWeight:"bold"}}>Alfan Hibban</Text>
              <Text note>Alpha?</Text>
            </Body>
            <Right>
              <Text note>MOBILE</Text>
            </Right>
          </ListItem>

          <ListItem avatar style={{paddingTop: 10, paddingBottom: 10}}>
            <Left>
              <Thumbnail source={require("../../Image/person.jpg")}/>
            </Left>
            <Body>
              <Text style={{fontWeight:"bold"}}>Aliatuzzulfa</Text>
              <Text note>like you</Text>
            </Body>
            <Right>
              <Text note>MOBILE</Text>
            </Right>
          </ListItem>

          <ListItem avatar style={{paddingTop: 10, paddingBottom: 10}}>
            <Left>
              <Thumbnail source={require("../../Image/person.jpg")}/>
            </Left>
            <Body>
              <Text style={{fontWeight:"bold"}}>Bayu Eka Prananda</Text>
              <Text note>Suka sama kontak di atas saya</Text>
            </Body>
            <Right>
              <Text note>MOBILE</Text>
            </Right>
          </ListItem>

        </List>
      </Content>
    );
  }

}