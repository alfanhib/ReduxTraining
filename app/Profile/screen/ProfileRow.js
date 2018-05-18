import React, { Component } from 'react';
import {  Thumbnail, Body, Text, CardItem, Item } from 'native-base';
import {View} from 'react-native'
import axios from 'axios'

const url = ""

export default class ProfileRow extends Component {

	state ={
		title: "You Have Mutual Friend",
		data: "You And Amin Know Rehan"
	}
	render(){
		const uri = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/98381915/original/638c2bd79f21bf195e384491beccc5aae68d1905/design-minimalist-flat-line-vector-avatar-of-you.jpg'

		return(
			<CardItem>
        <Item>
          <Thumbnail small source={{uri:uri}} style={{marginRight:10}}/>
            <View>
              <Text>{this.state.title}</Text>
              <Text note>{this.state.data}</Text>
            </View>
        </Item>
      </CardItem>
		)
	}
}