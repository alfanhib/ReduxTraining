import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Left, Body, Header, Button, Icon, Right, Thumbnail } from 'native-base';
import {} from 'react-native-ui-kitten'

export default class Setting extends Component{
  
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
            <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>Settings</Text>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem avatar style={{paddingTop: 20, paddingBottom: 20}}>
              <Left>
                <Thumbnail source={require("../Image/person.jpg")} style={{padding: 50, borderRadius: 50}}/>
              </Left>
              <Body>
                <Text>Alfan Hibban Intiyas</Text>
                <Text note>Junior Progammer</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="key" type="Entypo" style={{color:"#128c7e"}}/>
              </Left>
              <Body>
                <Text>Account</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="message" type="Entypo" style={{color:"#128c7e"}}/>
              </Left>
              <Body>
                <Text>Chats</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-notifications" type="Ionicons" style={{color:"#128c7e"}}/>
              </Left>
              <Body>
                <Text>Notification</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="data-usage" type="MaterialIcons" style={{color:"#128c7e"}}/>
              </Left>
              <Body>
                <Text>Data and storage usage</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="user" type="FontAwesome" style={{color:"#128c7e"}}/>
              </Left>
              <Body>
                <Text>Invite a friend</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="help-with-circle" type="Entypo" style={{color:"#128c7e"}}/>
              </Left>
              <Body>
                <Text>Help</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }

}