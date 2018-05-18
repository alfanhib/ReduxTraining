import React, { Component } from 'react';
import { Container, Content, Text, Header, Body, Left, Button, Right, Icon 
} from 'native-base';

import ListContacts from './Components/ListContact';

export default class Contacts extends Component{

  render(){
    return(
      <Container>
        
        <Header style={{backgroundColor: "#075e54"}} hasTabs>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate("Main")}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>Select contact</Text>
            <Text note style={{color: "#ffffff"}}>10 Contacts</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search"/>
            </Button>
            <Button transparent>
              <Icon name="md-person-add" type="Ionicons"/>
            </Button>
            <Button transparent>
              <Icon name="more"/>
            </Button>
          </Right>
        </Header>
        <ListContacts/>
      </Container>
    );
  }

}