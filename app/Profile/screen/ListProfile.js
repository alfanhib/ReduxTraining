import React, {Component} from 'react'
import { Container, Content, Body, Text, List, ListItem } from 'native-base'

import {getProfiles} from '../actions'


export default class ListProfile extends Component{
	render(){
		return(
			<Container>
				<Content>
					<List>
						<ListItem>
			              <Body>
			                <Text>test</Text>
			                <Text note>test</Text>
			              </Body>
			            </ListItem>
					</List>
				</Content>
			</Container>
		)
	}
} 