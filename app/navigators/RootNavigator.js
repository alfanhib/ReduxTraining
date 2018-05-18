import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from  'native-base'

import Welcome from '../WhatsApp/Welcome'
import Login from '../WhatsApp/Authentication/Screens/Login'
import Chats from '../WhatsApp/Chats/Chats'
import Contacts from '../WhatsApp/Contacts/Contacts'
import Setting from '../WhatsApp/Setting/Setting'
import ChatScreen from '../WhatsApp/Chats/ScreenChat'


const Main = TabNavigator({
  Chats: {
    screen: Chats,
    navigationOptions:{
      header:null
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions:{
      header:null
    }
  },
  Settings: {
    screen: Setting,
    navigationOptions:{
      header:null
    }
  }
},{
  tabBarOptions:{
    indicatorStyle: {
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: '#075e54'
    }
  }
})

const RootNavigator = StackNavigator({
  
  Index:{
    screen: Welcome,
    navigationOptions:{
      header:null
    }
  },
  Login:{
    screen: Login,
    navigationOptions:{
      header:null
    }
  },
  Main:{
    screen:Main,
    navigationOptions:{
      header:null
    }
  },
  ChatScreen:{
    screen:ChatScreen,
    navigationOptions:{
      header:null
    }
  }
  
})

export default RootNavigator;