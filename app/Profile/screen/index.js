import React, { Component } from 'react';

import {Container, Content, Body, Text, Button} from 'native-base';

export default class Index extends Component {

	handlePress(){
		this.props.navigation.navigate('Profile')
	}

	render(){
		return(
			<Container>
				<Content>
					<Button info onPress={() => this.handlePress()}>
						<Text>Login</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}