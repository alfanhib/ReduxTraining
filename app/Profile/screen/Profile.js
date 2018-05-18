import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
		Container,
		Content,
		Body,
		Text,
		Header,
		Left,
		Right,
		Icon,
		Card,
		CardItem,
		Thumbnail,
		Button,
		List,
		ListItem

} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

import ProfileRow from './ProfileRow'

export default class Profile extends Component {

		state = {

				name: "Alfan Hibban",
				position: " Junior Progammer & Junior Networking",
				school: "SMK TELKOM MALANG - Malang",
				friend: "AMIN UDIN",
				note: "I'm a Fresh Graduate From SMK TELKOM MALANG MAJOR NETWORKING"
		}

		render() {

				const uri = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/98381915/original/638c2bd79f21bf195e384491beccc5aae68d1905/design-minimalist-flat-line-vector-avatar-of-you.jpg'

				return (
						<Container>
								<Content>
										<Card>
												<CardItem>
														<Body style={styles.body}>
																<Thumbnail large source={{uri: uri}}/>
																<Content>
																		<Text>{this.state.name}</Text>
																		<Text>{this.state.position}</Text>
																		<Text note>{this.state.school}</Text>
																		<Text note>{this.state.friend}100+</Text>
																</Content>
																<Row style={{marginLeft: 15,marginTop: 20}}>
																		<Button bordered>
																				<Text>Message</Text>
																		</Button>
																		<Button style={{marginLeft: 5}}>
																				<Text>Connect</Text>
																		</Button>

																</Row>
																<Content style={{marginTop: 25}}>
																		<Text style={{fontSize: 15}}>{this.state.note}</Text>
																</Content>
														</Body>
												</CardItem>
										</Card>
										<Card>
												<Text style={{margin:15}}></Text>
												<ProfileRow />
										</Card>
								</Content>
						</Container>
				)
		}
}

const styles = StyleSheet.create({
    body:{
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
	},
})
