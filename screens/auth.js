/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  ListItem,
  Text,
  Left,
  Button,
  Icon,
  Right,
} from 'native-base';

export default function AuthScreen({navigation}) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent icon onPress={() => navigation.navigate('Home')}>
            <Icon type="Ionicons" name="chevron-back-outline" />
            {/* <Icon type="MaterialIcons" name="arrow-back-ios" /> */}
          </Button>
        </Left>
        <Body>
          <Title>Authentication</Title>
        </Body>
        <Right>
          <Button transparent icon onPress={() => navigation.navigate('Home')}>
            <Icon name="log-out-outline" />
          </Button>
        </Right>
      </Header>
      <Content></Content>
    </Container>
  );
}
